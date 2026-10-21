# Mendly worker booking

A Next.js App Router application using React, TypeScript, and Tailwind CSS.

## Run locally

```sh
npm install
npm run dev
```

Open http://localhost:3000. Validate with `npm run typecheck` and `npm run build`; serve the production build with `npm start`.

The build script uses Next.js Webpack mode because Turbopack encountered a CSS worker subprocess failure in this Windows environment. Development continues to use the default Next.js development server.

## Structure

```text
app/
  layout.tsx                 # Root metadata and global styles
  (dashboard)/
    layout.tsx               # Shared booking provider and application shell
    page.tsx                 # /
    services/page.tsx        # /services
    jobs/page.tsx            # /jobs
    profile/page.tsx         # /profile
components/
  layout/                    # Header, navigation, shell
  shared/                    # Logo, avatar, toast
  ui/                        # Reusable UI primitives
features/
  auth/components/           # Demo sign-in and sign-up
  booking/                   # Shared booking state and actions
  home/components/           # Home screen and content
  jobs/                      # Job types, seed data, cards, requests, list
  services/                  # Service data, grid, popular jobs, search
  profile/components/        # Profile screen
lib/                         # Shared utilities
public/                      # Static assets
```

Route pages and layouts remain server components. Interactive screens, forms, navigation, and the shared provider declare client boundaries. Keep feature-specific components, data, and types within their feature; promote UI to `components/shared` only when multiple features use it.

## Demo behavior

Sign-in accepts a valid email and a password of at least six characters. Authentication and bookings are in memory: they survive client navigation but reset on refresh. This is a UI demo, not a secure authentication system. Add a backend and server-side session checks before using real accounts or bookings. Seed jobs and the profile are sample data; images load from external services.

Google authentication, password recovery, photo uploads, profile editing, detailed job views, and rating submission remain demo placeholders. Job creation, service search, job filters, cancellation, completion, and logout operate locally. Connect persistence through the booking provider and replace demo authentication in the auth feature when adding a backend.

## Icons

Icons use the official `@flaticon/flaticon-uicons` package with rounded regular and solid styles, loaded locally through CSS imports. `components/shared/icon.tsx` centralizes names, sizes, decorative accessibility, and rating fill styles. The shared `IconCredit` component supplies the Flaticon attribution on authentication and dashboard screens.

## Styling and service ratings

Application component classes are defined in `app/components.css` using Tailwind v4 `@apply`. Shared button, icon-button, section-heading, and form-field utilities are grouped so they can be changed in one place. Responsive and state variants remain in their component classes. Components use normal `className` values; there is no runtime style lookup or `ui-styles.ts` helper.

Theme colors, shadows, radii, spacing, gradients, and runtime icon-size variables remain in `app/globals.css`. The global heading default remains weight 600. Direct Tailwind utilities are still supported for local component adjustments.

Popular jobs and Most rated services share `ServiceCarousel` and `PopularJobCard`. Ratings in `features/services/data/rated-services.ts` are seeded demo values; replace them with aggregated reviews when adding an API.

## Login visibility

The demo login screen is currently disabled with `LOGIN_ENABLED = false` in `features/auth/config.ts`. All routes open directly, and booking dialogs remain usable. Keep this flag disabled until login is explicitly requested again; set it to true to restore the demo login flow.
"# workers-booking-frontend" 
