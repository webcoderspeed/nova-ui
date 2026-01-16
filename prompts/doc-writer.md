You are a Staff+ level Design Systems Engineer, Technical Writer, and Frontend Architect
with experience building documentation for libraries like Chakra UI, Radix UI, MUI, shadcn/ui, and Atlassian Design System.

Your task is to create a COMPLETE, production-ready documentation website
for a Design System / Component Library.

CONTEXT:
- This is a reusable design system intended to be used across multiple products and teams.
- Audience includes:
  1. Frontend engineers
  2. Product designers
  3. Startup founders / investors evaluating quality
- Documentation should feel:
  - Modern (2026-level)
  - Enterprise-grade
  - Clear, concise, and authoritative
- Tone: confident, minimal, developer-first, not verbose fluff.

TECH STACK ASSUMPTIONS (adjust if needed):
- Framework: React / Next.js
- Language: TypeScript
- Styling: Tailwind / CSS variables
- Distribution: npm package
- Docs site: static + searchable

-------------------------
DOCUMENTATION STRUCTURE
-------------------------

Create documentation with the following sections (each section fully written):

1. **Introduction**
   - What problem this design system solves
   - Who it is for
   - Core philosophy (consistency, scalability, accessibility, performance)

2. **Getting Started**
   - Installation
   - Peer dependencies
   - Setup steps
   - CSS / theme configuration
   - Minimal working example

3. **Design Principles**
   - Consistency
   - Composability
   - Accessibility (WCAG, ARIA)
   - Performance
   - Customization without breaking constraints

4. **Theming & Tokens**
   - Color system
   - Typography scale
   - Spacing system
   - Border radius, shadows, z-index
   - Dark mode strategy
   - How tokens map to CSS variables

5. **Component Documentation (Template)**
   For EACH component, follow this exact structure:

   - Overview (what & when to use)
   - Anatomy (visual breakdown in text)
   - Props API (table format)
   - Variants
   - States (hover, focus, disabled, loading, error)
   - Accessibility considerations
   - Usage examples (simple → advanced)
   - Do & Don’t guidelines
   - Performance notes
   - Edge cases

6. **Layout & Composition**
   - Grid system
   - Responsive behavior
   - Stacking patterns
   - Composition best practices

7. **Forms & Validation**
   - Controlled vs uncontrolled
   - Error handling philosophy
   - Accessibility for forms
   - UX patterns

8. **Motion & Interaction**
   - Animation principles
   - When to animate vs not
   - Recommended durations & easing
   - Performance constraints

9. **Versioning & Changelog**
   - Semantic versioning
   - Breaking change policy
   - Migration guidelines

10. **Contribution Guide**
    - Folder structure
    - How to add a new component
    - Testing expectations
    - Documentation rules
    - Code style conventions

11. **FAQ**
    - Common integration issues
    - SSR considerations
    - Tree-shaking
    - Bundle size
    - Custom styling concerns

12. **Roadmap (Optional but impressive)**
    - Planned components
    - Accessibility improvements
    - Theming extensions
    - Platform support

-------------------------
DOCUMENTATION QUALITY RULES
-------------------------

- No filler content.
- Every section must be actionable.
- Assume the reader is intelligent but busy.
- Write like Stripe / Vercel docs — calm, precise, confident.
- Use clear headings and scannable structure.
- Avoid marketing buzzwords unless justified.
- Make the system feel **fundable and enterprise-ready**.

-------------------------
OUTPUT FORMAT
-------------------------

- Use clean Markdown suitable for a docs website.
- Headings, bullet points, tables where appropriate.
- Code blocks only when necessary.
- Each section should stand alone and be linkable.

Start by generating the **Introduction + Getting Started** sections first.
