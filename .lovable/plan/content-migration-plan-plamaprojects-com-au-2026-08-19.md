# Content Migration Plan — plamaprojects.com.au

Migrate all text, copy, and visual assets from the source website `plamaprojects.com.au` to the current multi-page site while preserving the high-end architectural design.

## Technical Details

### 1. Data Layer (`src/data/services.ts`)
- Replace generic service descriptions, offerings, and benefits with exact scraped copy.
- Map source specializations (Structural, Civil, Glazing, Marine, Hydraulic, Expert Reports, Certificates, PM) to existing routes.

### 2. Homepage (`src/routes/index.tsx`)
- **Hero:** Update title and body to reflect source site messaging.
- **Intro/About:** Replace placeholder text with source "A Few Words About Our Firm" content.
- **Featured Services:** Update labels and descriptions.
- **Why Us:** Replace generic points with source strengths (Innovation, Responsiveness, Cost effectiveness, etc.).
- **Featured Projects:** Use source project examples (New Built, Townhouses, Renovations).

### 3. About Page (`src/routes/about.tsx`)
- **Our Story:** Use source "Lucas Tran - principal engineer. director. founder" bio and qualifications.
- **Team/Approach:** Replace text with source "Our Team" and "Our Strength" sections.
- **Founder Spotlight:** Replace generated stock photo with actual `Lucas_Portrait.jpg` (already downloaded).

### 4. Contact Page (`src/routes/contact.tsx`)
- Use source "Contact Details" copy.
- Ensure all numbers (+61 2 8384 3919 / 0452 588 578) match source exactly.
- Retain the custom file/folder upload fields.

### 5. Components (`SiteNav.tsx`, `SiteFooter.tsx`, `CTASection.tsx`)
- Update footer text with source "With every new project..." tagline.
- Ensure all contact links and phone numbers are consistent.

### 6. Visual Assets
- Replace generic stock engineering images with source project photos where possible.
- Update `founder-lucas.jpg` with the authentic portrait.

## User Review Required

> [!NOTE]
> I will use the exact wording from the source site as requested, which shifts the tone from a "large-agency" feel to an "authentic scale" business representation.
