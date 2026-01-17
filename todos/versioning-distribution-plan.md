# TODO Plan: Versioning & Distribution Strategy

This plan outlines the steps to formalize the versioning and distribution strategy for Nova UI, focusing on Git Submodules and strict semantic versioning.

- [x] **Task 1: Audit & Standardize Versioning Architecture**
  - Analyze current `scripts/generate-docs-data.mjs` to confirm version detection logic.
  - Define strict file naming conventions (e.g., `component-name/v1.0.0.tsx` vs `component-name.tsx`).
  - Document the "Component-Level Versioning" vs "Library-Level Versioning" policy.

- [x] **Task 2: Optimize Git Submodule Distribution Flow**
  - Review the existing `add-submodule.sh` script in `app/docs/installation/page.tsx`.
  - Refactor the distribution strategy to minimize "cleanup" steps for the consumer (e.g., consider a `dist` branch or a cleaner root structure if feasible, or strictly maintain the script).
  - Create a standalone `scripts/setup-submodule.sh` in the root for easier access/maintenance.

- [x] **Task 3: Establish Release Workflow**
  - Create a `RELEASE_PROCESS.md` guide for maintainers.
  - Define steps: Bump `package.json`, generate Changelog, create Git Tag, update `version-provider` defaults.
  - Automate version bumping where possible (e.g., npm scripts).

- [x] **Task 4: Validation & Testing**
  - Create a temporary "consumer" Next.js app.
  - Execute the "Add Submodule" workflow from scratch.
  - Verify that version switching works in the consumer app.
  - Verify that updates (`git submodule update`) work as expected.
