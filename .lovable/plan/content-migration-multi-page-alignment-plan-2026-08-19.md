# Content Migration & Multi-Page Alignment Plan

The goal is to apply authentic content from `plamaprojects.com.au` across the entire website, specifically ensuring the Services, Industries, and Projects pages are updated to match the authenticity already applied to the Home and About pages.

## Content Sources
- **Services**: Extracted from `https://plamaprojects.com.au/services/`.
- **Industries**: Inferred from "Specializations" on the source site (Residential, Commercial, Industrial, Knock-down and Rebuild, Healthcare).
- **Projects**: Extracted from `https://plamaprojects.com.au/projects/` (Knock Down Rebuilds, Alterations & Additions, Façade Engineering).

## Proposed Changes

### 1. Data Layer (`src/data/services.ts`)
- Refine all service definitions with exact copy from the source site.
- Update `offerings` lists for each discipline.
- Ensure `industries` arrays reflect the authentic sectors.

### 2. Industry Page (`src/routes/industries.tsx`)
- Update the `sectors` array to use authentic engineering categories (Residential, Commercial, Industrial, Knock-down & Rebuild, Healthcare).
- Replace placeholder descriptions with engineering-focused copy.

### 3. Projects Page (`src/routes/projects.tsx`)
- Update the `projects` array with authentic project types (e.g., "Knock Down - Rebuilt", "Alterations & Additions").
- Update locations and tags to match real Sydney engineering context.
- Link the downloaded project images (`project-1.jpg`, etc.).

### 4. Service Templates (`src/components/site/ServicePage.tsx`)
- Verify that the dynamic content injected from `services.ts` flows correctly into the newly designed layouts (asymmetric overview, bento benefits, etc.).

## Technical Details
- Using local asset imports for newly downloaded images.
- Maintaining the existing "Luxury Architectural" design system (colors, typography).
- Ensuring all links and navigation are consistent.
