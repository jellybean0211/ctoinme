-- 003_waitlist_entries.sql
-- Public waitlist capture for pre-launch interest

create table if not exists waitlist_entries (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  goal text,
  source text default 'landing_page',
  created_at timestamptz default now()
);

create index if not exists idx_waitlist_entries_created_at
  on waitlist_entries(created_at desc);

alter table waitlist_entries enable row level security;

create policy "Anyone can join waitlist"
  on waitlist_entries for insert
  with check (true);
