# Assistant-vibe-coder

A Next.js (App Router) starter app with Prisma, Inngest, tRPC, Clerk auth, and a curated component/ui library — built as the codebase for the "Loveable clone / assistant-vibe-coder" project.

[Watch Demo 🚀](my-vibe-coder.vercel.app)

## Key Features

- Full Next.js app (App Router)
- Authentication via Clerk
- API routes and background/event workflows via Inngest
- Type-safe backend with tRPC
- Database modeling and migrations with Prisma
- Tailwind + component-driven UI with Shadcn

## Example Prompts

<details>
<summary><strong>Landing Page</strong></summary>

Create a modern SaaS landing page for a project management tool. Include a hero section with a gradient background, headline "Manage Projects Effortlessly", subheadline, and two CTA buttons (Start Free Trial, Watch Demo). Add a features section with 6 feature cards in a grid layout, each with an icon, title, and description. Include a pricing section with 3 tiers (Starter $9/mo, Pro $29/mo, Enterprise custom) showing features as checkmarks. Add a testimonials carousel with 5 customer reviews including avatar, name, company, and quote. Footer should have 4 columns: Product links, Company links, Resources, and social media icons. Use a blue and white color scheme with smooth animations on scroll.

</details>

<details>
<summary><strong>Portfolio</strong></summary>

Build a portfolio website for a frontend developer. Create a hero section with my name "Alex Chen", tagline "Frontend Developer & UI Designer", and a profile image on the right. Add a projects section displaying 6 projects in a masonry grid layout. Each project card should have a thumbnail image, project title, tech stack tags (React, TypeScript, etc.), short description, and buttons for Live Demo and GitHub. Include an about section with a two-column layout: left side has my bio paragraph, right side lists technical skills grouped by category (Frontend, Backend, Tools) with progress bars showing proficiency. Add a contact section with a working form (name, email, message fields) and my email and LinkedIn links. Use a dark theme with green accent colors.

</details>

<details>
<summary><strong>Dashboard</strong></summary>

Generate an analytics dashboard for an e-commerce admin panel. Create a sidebar navigation on the left with menu items (Dashboard, Orders, Products, Customers, Analytics, Settings) with icons. The main content area should have 4 stat cards at the top showing Total Revenue, Orders Today, Active Users, and Conversion Rate with numbers and percentage changes (up/down arrows). Below that, add a 2-column layout: left side has a placeholder for a line chart showing revenue over time, right side shows recent orders table with columns (Order ID, Customer, Amount, Status). Status should have colored badges (Pending yellow, Completed green, Cancelled red). Add a top navbar with search bar, notifications bell icon, and user profile dropdown. Use a light gray background with purple accents.

</details>

<details>
<summary><strong>Blog</strong></summary>

Create a tech blog with a clean, readable design. Homepage should have a large featured post at the top with cover image, category badge, title, excerpt, author info (avatar, name, date), and read time. Below that, display 9 blog posts in a 3-column grid with smaller cards (thumbnail, category, title, excerpt, author, date). Add a sidebar on the right with search bar, popular posts widget (5 posts with thumbnails and titles), categories list, and newsletter signup form. Individual blog post page should have full-width cover image, title, author info, reading progress bar at top, formatted content with headings, code blocks, and blockquotes, and related posts at the bottom. Include a comment section placeholder. Use a serif font for article content and sans-serif for UI elements.

</details>

<details>
<summary><strong>Authentication</strong></summary>

Build complete authentication pages with modern design. Login page should have a centered card with logo at top, "Welcome Back" heading, email and password input fields with icons, "Remember Me" checkbox, "Forgot Password?" link, primary login button, divider with "or continue with", social login buttons (Google, GitHub, Twitter) with icons, and "Don't have an account? Sign up" link at bottom. Signup page similar layout but with Name, Email, Password, and Confirm Password fields. Add real-time password strength indicator showing Weak/Medium/Strong with colored bar. Include form validation with error messages below fields. Forgot password page should have email input and reset link button. Use gradient background with glassmorphism effect on the card.

</details>

<details>
<summary><strong>E-commerce Product Page</strong></summary>

Design a detailed product page for a sneaker store. Left side should have an image gallery with one large main image and 4 thumbnail images below that change the main image on click. Right side has product info: breadcrumb navigation, product name "Air Max 2024", star rating (4.5 stars with 230 reviews link), price with strikethrough original price showing discount, color selector with clickable color swatches, size selector with size buttons (US 7-13), stock status badge, quantity selector with plus/minus buttons, two CTA buttons (Add to Cart primary, Add to Wishlist secondary), and accordion sections for Description, Shipping Info, and Return Policy. Below the main section, add tabs for Reviews, Size Guide, and Product Details. At the bottom, show a "You May Also Like" section with 4 related product cards in a horizontal scroll. Use a modern, minimal design with black and white theme.

</details>

---

## Tech Stack

| Category | Technology | Purpose |
|----------|-----------|---------|
| Framework | Next.js | React framework with App Router for modern web applications |
| Language | TypeScript | Type-safe development with enhanced IDE support |
| Styling | Tailwind CSS | Utility-first CSS framework for rapid UI development |
| Authentication | Clerk | User management and authentication infrastructure |
| Database | PostgreSQL | Relational database for application data storage |
| ORM | Prisma | Type-safe database client and schema management |
| API Layer | tRPC | End-to-end typesafe API without code generation |
| Background Jobs | Inngest | Reliable serverless job processing and workflows |
| Code Execution | E2B | Sandboxed environment for secure code execution and previews |
| Containerization | Docker | Application packaging and deployment consistency |
| AI Model | GPT-4o-mini | Advanced language model for code generation |

## Requirements

- Node 18+ (recommended)
- pnpm / npm / yarn
- A database supported by Prisma (e.g., PostgreSQL)

## Quickstart

Clone the repo and install dependencies:

```bash
git clone <repo-url>
cd assistant-vibe-coder
npm install
```

Run the development server:

```bash
npm run dev
```

Notes:
- The project runs Next.js with the `dev` script: `next dev --turbopack`.
- `postinstall` runs `prisma generate` so Prisma client is available after install.

## Environment

Copy `.env.example` (if present) to `.env` and set the required variables. Typical variables:

- `DATABASE_URL` — your Prisma database connection string
- `NEXT_PUBLIC_CLERK_*` — Clerk public keys (if using Clerk)
- Any provider keys (OpenAI, etc.) used by the app

## Database

Prisma schema is in the `prisma/` folder. To create or apply migrations locally:

```bash
npx prisma migrate dev --name init
```

To run the seed script (the project defines `prisma.seed`):

```bash
npx prisma db seed
```

The `package.json` also exposes a `prisma.seed` hook (`tsx prisma/seed.ts`) — `npx prisma db seed` will invoke it.

## Scripts

- `npm run dev` — start Next.js in dev mode
- `npm run build` — build for production
- `npm run start` — start built Next.js
- `npm run lint` — run linter

## Development notes

- UI components live in `src/components/ui/`.
- Prisma schema: `prisma/schema.prisma` and seed at `prisma/seed.ts`.
- Inngest functions are under `src/inngest/`.
- TRPC router and server setup live in `src/trpc/routers` and `src/trpc/server.tsx`.

## Testing & linting

- Lint: `npm run lint`
- Add your tests (this starter does not include a dedicated test runner by default).

## Deployment

This project targets modern Node hosting and can be deployed to Vercel, Render, or other Node hosts supporting Next.js. Typical steps:

1. Set `DATABASE_URL` and other environment variables in the host.
2. Run `npm run build` during the CI/CD pipeline.
3. Run migrations (`npx prisma migrate deploy`) or use your provider's recommended approach.

## Contributing

- Open issues and PRs.
- Follow the existing code style and run `npm run lint` before submitting.

## License

This repo does not include a license file by default — add a `LICENSE` if you intend to publish under a specific license.

---

If you want, I can:

- Tailor the README with project-specific descriptions and example screenshots.
- Add step-by-step environment variable examples and `.env.example`.
- Add deployment instructions for Vercel or another provider.

Tell me which additions you'd like and I'll update the file.
