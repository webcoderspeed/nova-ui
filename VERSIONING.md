# Nova UI Versioning & Distribution Strategy

## 1. Core Philosophy: Library-Level Versioning
Nova UI uses **Library-Level Versioning** backed by **Git Tags**.
- The entire `components/nova` directory is versioned together.
- We do **not** use individual component versioning (e.g., Button v1.2, Input v1.0).
- Users lock their version by checking out a specific Git Tag in their submodule.

## 2. Directory Structure & Versioning

### Source Code (`components/nova/`)
Contains the *current* version of the components.
```
components/nova/
├── nova-button.tsx  <-- Represents the code for the currently checked-out git ref
├── nova-card.tsx
└── index.ts
```

### Documentation (`app/docs/components/`)
Contains version-specific documentation examples.
```
app/docs/components/button/
├── page.tsx         <-- Entry point, loads version based on context
├── v1.0.0.tsx       <-- Doc examples for v1.0.0
├── v1.1.0.tsx       <-- Doc examples for v1.1.0
└── v2.0.0.tsx       <-- Doc examples for v2.0.0
```
- **Rule**: When making breaking changes to `components/nova/nova-button.tsx`, you must:
  1. Create a new doc file (e.g., `v2.0.0.tsx`) reflecting the new API.
  2. Update `scripts/generate-docs-data.mjs` or ensure the file naming is picked up.

## 3. Distribution via Git Submodule

Consumers install Nova UI by adding this repository as a submodule.

### Installation Flow
1. **Add Submodule**:
   ```bash
   git submodule add https://github.com/your-org/nova-ui.git src/nova-ui
   ```
2. **Checkout Version**:
   ```bash
   cd src/nova-ui
   git checkout v1.0.0
   ```
3. **Update**:
   ```bash
   cd src/nova-ui
   git fetch --tags
   git checkout v1.1.0
   cd ../..
   git add src/nova-ui
   git commit -m "Upgrade Nova UI to v1.1.0"
   ```

## 4. Release Process

To release a new version (e.g., `v1.1.0`):
1. **Update Code**: Make changes in `components/nova`.
2. **Update Docs**: Create `app/docs/components/[name]/v1.1.0.tsx` if API changed.
3. **Bump Version**: Update `package.json` version.
4. **Tag**: Create a git tag `v1.1.0`.
5. **Push**: Push commit and tag.

## 5. Automation
- `scripts/generate-docs-data.mjs` automatically detects available documentation versions.
- `scripts/setup-submodule.sh` (to be created) helps users install the submodule correctly.
