-- 001_initial_schema.sql
-- LMS core tables: profiles, courses, categories, lessons, subscriptions, lesson_progress

-- Profiles (extends Supabase auth.users)
create table if not exists profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  avatar_url text,
  created_at timestamptz default now()
);

-- Courses
create table if not exists courses (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  description text,
  image_url text,
  created_at timestamptz default now()
);

-- Categories (within a course)
create table if not exists categories (
  id uuid primary key default gen_random_uuid(),
  course_id uuid not null references courses(id) on delete cascade,
  slug text not null,
  title text not null,
  sort_order int default 0,
  unique(course_id, slug)
);

-- Lessons (within a category)
create table if not exists lessons (
  id uuid primary key default gen_random_uuid(),
  category_id uuid not null references categories(id) on delete cascade,
  slug text not null,
  title text not null,
  description text,
  youtube_id text not null,
  duration_minutes int,
  is_free boolean default false,
  sort_order int default 0,
  unique(category_id, slug)
);

-- Subscriptions (Stripe-managed)
create table if not exists subscriptions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  stripe_customer_id text,
  stripe_subscription_id text unique,
  plan_type text not null check (plan_type in ('6_month', '1_year')),
  status text not null default 'inactive',
  current_period_start timestamptz,
  current_period_end timestamptz,
  created_at timestamptz default now()
);

-- Lesson progress
create table if not exists lesson_progress (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  lesson_id uuid not null references lessons(id) on delete cascade,
  completed boolean default false,
  completed_at timestamptz,
  unique(user_id, lesson_id)
);

-- Indexes for common queries
create index if not exists idx_categories_course_id on categories(course_id);
create index if not exists idx_lessons_category_id on lessons(category_id);
create index if not exists idx_subscriptions_user_id on subscriptions(user_id);
create index if not exists idx_lesson_progress_user_id on lesson_progress(user_id);
create index if not exists idx_lesson_progress_lesson_id on lesson_progress(lesson_id);

-- Auto-create profile on signup
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, full_name, avatar_url)
  values (
    new.id,
    coalesce(new.raw_user_meta_data ->> 'full_name', new.raw_user_meta_data ->> 'name'),
    coalesce(new.raw_user_meta_data ->> 'avatar_url', new.raw_user_meta_data ->> 'picture')
  );
  return new;
end;
$$ language plpgsql security definer;

-- Trigger for auto-creating profiles
drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();
