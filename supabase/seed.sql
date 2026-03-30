-- Seed data: one course with 3 categories, each with 3-4 lessons
-- Fixed UUIDs for reproducibility

-- Course
INSERT INTO courses (id, title, slug, description, image_url)
VALUES (
  'a1b2c3d4-e5f6-4a7b-8c9d-0e1f2a3b4c5d',
  'The CTO Playbook: From Engineer to Executive',
  'cto-playbook',
  'A comprehensive guide to transitioning from senior engineer to CTO. Learn how to build teams, set technical strategy, manage stakeholders, and lead with clarity.',
  '/images/courses/cto-playbook.jpg'
);

-- Category 1: Technical Leadership
INSERT INTO categories (id, course_id, title, slug, sort_order)
VALUES (
  'b1000000-0000-4000-a000-000000000001',
  'a1b2c3d4-e5f6-4a7b-8c9d-0e1f2a3b4c5d',
  'Technical Leadership',
  'technical-leadership',
  1
);

-- Category 2: Building & Scaling Teams
INSERT INTO categories (id, course_id, title, slug, sort_order)
VALUES (
  'b2000000-0000-4000-a000-000000000002',
  'a1b2c3d4-e5f6-4a7b-8c9d-0e1f2a3b4c5d',
  'Building & Scaling Teams',
  'building-scaling-teams',
  2
);

-- Category 3: Strategy & Stakeholder Management
INSERT INTO categories (id, course_id, title, slug, sort_order)
VALUES (
  'b3000000-0000-4000-a000-000000000003',
  'a1b2c3d4-e5f6-4a7b-8c9d-0e1f2a3b4c5d',
  'Strategy & Stakeholder Management',
  'strategy-stakeholder-management',
  3
);

-- Lessons for Category 1: Technical Leadership
INSERT INTO lessons (id, category_id, title, slug, description, youtube_id, duration_minutes, sort_order, is_free)
VALUES
  (
    'c1000000-0000-4000-a000-000000000001',
    'b1000000-0000-4000-a000-000000000001',
    'The Mindset Shift: IC to Leader',
    'mindset-shift-ic-to-leader',
    'Why the skills that made you a great engineer won''t make you a great CTO. Learn to let go of the code and focus on leverage.',
    'dQw4w9WgXcQ',
    12,
    1,
    true
  ),
  (
    'c1000000-0000-4000-a000-000000000002',
    'b1000000-0000-4000-a000-000000000001',
    'Owning the Architecture Without Writing It',
    'owning-architecture',
    'How to guide technical decisions, set standards, and review architecture without becoming a bottleneck.',
    'dQw4w9WgXcQ',
    15,
    2,
    false
  ),
  (
    'c1000000-0000-4000-a000-000000000003',
    'b1000000-0000-4000-a000-000000000001',
    'Technical Debt as a Strategic Tool',
    'technical-debt-strategy',
    'Not all debt is bad. Learn to quantify, communicate, and strategically manage technical debt with your board and team.',
    'dQw4w9WgXcQ',
    14,
    3,
    false
  ),
  (
    'c1000000-0000-4000-a000-000000000004',
    'b1000000-0000-4000-a000-000000000001',
    'Build vs Buy: A Decision Framework',
    'build-vs-buy',
    'A practical framework for deciding when to build in-house, when to buy, and when to integrate. Includes real-world case studies.',
    'dQw4w9WgXcQ',
    11,
    4,
    false
  );

-- Lessons for Category 2: Building & Scaling Teams
INSERT INTO lessons (id, category_id, title, slug, description, youtube_id, duration_minutes, sort_order, is_free)
VALUES
  (
    'c2000000-0000-4000-a000-000000000001',
    'b2000000-0000-4000-a000-000000000002',
    'Hiring Engineers Who Ship',
    'hiring-engineers-who-ship',
    'Forget LeetCode. Learn how to design interview loops that identify builders, not puzzle-solvers.',
    'dQw4w9WgXcQ',
    13,
    1,
    true
  ),
  (
    'c2000000-0000-4000-a000-000000000002',
    'b2000000-0000-4000-a000-000000000002',
    'Team Topologies for Startups',
    'team-topologies-startups',
    'How to structure your engineering org from 3 people to 30. When to split teams, when to merge, and how to avoid Conway''s Law traps.',
    'dQw4w9WgXcQ',
    16,
    2,
    false
  ),
  (
    'c2000000-0000-4000-a000-000000000003',
    'b2000000-0000-4000-a000-000000000002',
    'Running Effective Engineering Sprints',
    'effective-sprints',
    'Agile without the ceremony. A lightweight sprint structure that keeps small teams shipping without burnout.',
    'dQw4w9WgXcQ',
    12,
    3,
    false
  );

-- Lessons for Category 3: Strategy & Stakeholder Management
INSERT INTO lessons (id, category_id, title, slug, description, youtube_id, duration_minutes, sort_order, is_free)
VALUES
  (
    'c3000000-0000-4000-a000-000000000001',
    'b3000000-0000-4000-a000-000000000003',
    'Translating Tech to the Board Room',
    'translating-tech-boardroom',
    'How to communicate technical complexity to non-technical stakeholders without dumbing it down or losing their trust.',
    'dQw4w9WgXcQ',
    14,
    1,
    true
  ),
  (
    'c3000000-0000-4000-a000-000000000002',
    'b3000000-0000-4000-a000-000000000003',
    'Setting a Technology Roadmap',
    'setting-tech-roadmap',
    'Align your technical roadmap with business goals. Learn to say no, prioritize ruthlessly, and communicate trade-offs clearly.',
    'dQw4w9WgXcQ',
    15,
    2,
    false
  ),
  (
    'c3000000-0000-4000-a000-000000000003',
    'b3000000-0000-4000-a000-000000000003',
    'Budgeting for Engineering Teams',
    'budgeting-engineering',
    'Cloud costs, headcount, tooling — how to build and defend an engineering budget that earns trust from finance.',
    'dQw4w9WgXcQ',
    13,
    3,
    false
  );
