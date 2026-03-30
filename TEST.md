# Manual Test Checklist — CTO in Me

Run `npm run dev` and open `http://localhost:3000`.

## Homepage (`/`)

- [ ] Page loads without console errors
- [ ] Header: logo links to `/` (not `#`)
- [ ] Header: "Home" nav link goes to `/`
- [ ] Header: anchor links work (`#testimonials`, `#menu`, `#faq`, `#pricing`)
- [ ] Header: "Dashboard" link shows only when logged in
- [ ] Header: avatar/sign-in button shows correct auth state
- [ ] Hero section: "Start AI Coding" scrolls to pricing
- [ ] Hero section: "Free Preview" scrolls to curriculum
- [ ] Course content section renders all categories
- [ ] Tool logos carousel scrolls
- [ ] Testimonials section renders cards
- [ ] Pricing: both cards display correctly with features
- [ ] Pricing: "Subscribe" button fires POST to `/api/checkout` with `{ planType: "6_month" | "1_year" }`
- [ ] Pricing: error message displays on checkout failure
- [ ] Pricing: unauthenticated user gets redirected to `/login`
- [ ] FAQ: accordion items expand/collapse
- [ ] CTA section: buttons link to `#pricing` and `#menu`
- [ ] Footer: social links render (placeholder `#` OK for now)
- [ ] Footer: Privacy Policy / Terms of Service links present

## Auth

- [ ] `/login` — page loads, Google sign-in button visible
- [ ] `/login?error=auth` — error banner "Sign in failed" is displayed
- [ ] Google OAuth redirects to Supabase callback URL
- [ ] `/auth/callback` — exchanges code for session, redirects to `/dashboard`
- [ ] `/auth/callback` without code — redirects to `/login?error=auth`

## Dashboard (`/dashboard`)

- [ ] Unauthenticated user gets redirected to `/login`
- [ ] Authenticated user sees course list
- [ ] "Subscribe now" banner shows for non-subscribers
- [ ] Sidebar: "Courses" and "Settings" links work
- [ ] Course card links to `/courses/[slug]`

## Dashboard Settings (`/dashboard/settings`)

- [ ] Profile section shows user name, email, avatar
- [ ] Subscription section shows status (active or "no subscription")
- [ ] "View Plans" links to `/#pricing` for non-subscribers
- [ ] "Manage Subscription" links to `/api/portal` (GET) for subscribers
- [ ] Sign Out button works and redirects to `/login`

## Course Overview (`/courses/[slug]`)

- [ ] Course title and description render
- [ ] Progress bar shows for authenticated users
- [ ] Category accordions expand/collapse
- [ ] Free lessons: link to lesson page, show "Free" badge
- [ ] Locked lessons: show "Locked" badge, link back to course overview
- [ ] "Unlock All Course Content" CTA shows for non-subscribers

## Lesson Page (`/courses/[slug]/[category]/[lesson]`)

- [ ] Free lesson loads with content
- [ ] Locked lesson redirects to course overview for non-subscribers
- [ ] Breadcrumb links back to course overview
- [ ] YouTube embed renders if video URL exists
- [ ] "Mark as Complete" button shows for authenticated users
- [ ] Prev/Next navigation links are correct
- [ ] Sidebar shows current category lessons with active state

## API Routes

- [ ] `POST /api/checkout` — returns 401 if not authenticated
- [ ] `POST /api/checkout` — returns 400 if planType invalid
- [ ] `POST /api/checkout` — returns `{ url }` on success
- [ ] `GET /api/portal` — redirects to Stripe portal for subscribers
- [ ] `GET /api/portal` — redirects to `/login` if not authenticated
- [ ] `GET /api/portal` — redirects to `/dashboard/settings` if no subscription
- [ ] `POST /api/webhooks/stripe` — returns 400 without signature header

## Error Handling

- [ ] `/nonexistent-page` — shows 404 page
- [ ] `/courses/nonexistent-course` — shows 404 page
- [ ] No unhandled console errors on any page

## Placeholder Links (known, not bugs)

These are `href="#"` and expected to be filled in later:
- Footer social media links (X, YouTube, Bilibili, Xiaohongshu, Weibo, Douyin)
- "View All Courses" button on homepage
- Privacy Policy / Terms of Service in footer
- Theme toggle button (no handler)
