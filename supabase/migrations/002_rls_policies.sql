-- 002_rls_policies.sql
-- Row Level Security policies for all tables

-- Enable RLS on all tables
alter table profiles enable row level security;
alter table courses enable row level security;
alter table categories enable row level security;
alter table lessons enable row level security;
alter table subscriptions enable row level security;
alter table lesson_progress enable row level security;

-- Profiles: users can read and update their own profile
create policy "Users can read own profile"
  on profiles for select
  using (auth.uid() = id);

create policy "Users can update own profile"
  on profiles for update
  using (auth.uid() = id);

-- Courses: public read access
create policy "Courses are publicly readable"
  on courses for select
  using (true);

-- Categories: public read access
create policy "Categories are publicly readable"
  on categories for select
  using (true);

-- Lessons: public read access (content gating is handled in the app layer)
create policy "Lessons are publicly readable"
  on lessons for select
  using (true);

-- Subscriptions: users can read their own
create policy "Users can read own subscriptions"
  on subscriptions for select
  using (auth.uid() = user_id);

-- Lesson progress: users can read, insert, update their own
create policy "Users can read own progress"
  on lesson_progress for select
  using (auth.uid() = user_id);

create policy "Users can insert own progress"
  on lesson_progress for insert
  with check (auth.uid() = user_id);

create policy "Users can update own progress"
  on lesson_progress for update
  using (auth.uid() = user_id);
