# Release Process

This document outlines the steps to release a new version of Nova UI.

## Prerequisites
- Clean git working directory.
- Access to push tags to the remote repository.

## Steps

### 1. Prepare Release
1. **Update Components**: Ensure all changes in `components/nova/` are final.
2. **Update Documentation**:
   - Run `npm run generate-docs` to ensure `lib/docs-config.ts` is up to date.
   - If API changes were made, ensure new versioned doc files (e.g., `v1.2.0.tsx`) exist in `app/docs/components/`.
3. **Run Tests**:
   - `npm run type:check`
   - `npm run lint`
   - Run any other test suites.

### 2. Version Bump
1. Determine the new version number (semver: `MAJOR.MINOR.PATCH`).
2. Update `package.json`:
   ```bash
   npm version 1.2.0 --no-git-tag-version
   ```
   *(Note: We use `--no-git-tag-version` because we might want to commit other changes first, or use a specific message)*

### 3. Commit & Tag
1. Stage changes:
   ```bash
   git add .
   git commit -m "chore(release): v1.2.0"
   ```
2. Create Git Tag:
   ```bash
   git tag -a v1.2.0 -m "v1.2.0"
   ```

### 4. Push
```bash
git push origin main
git push origin v1.2.0
```

## Post-Release
- The documentation site will automatically rebuild (if connected to Vercel/Netlify).
- Consumers can now run:
  ```bash
  cd src/nova-ui
  git fetch --tags
  git checkout v1.2.0
  ```
