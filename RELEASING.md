# Releasing Nova UI

## Versioning

Nova UI uses [Semantic Versioning](https://semver.org/) via git tags:

```
v1.0.0   — initial stable release
v1.1.0   — new component or feature (minor)
v1.1.1   — bug fix (patch)
v2.0.0   — breaking API change (major)
```

## Commit Convention

All commits must follow [Conventional Commits](https://www.conventionalcommits.org/):

```
feat(button): add icon-only variant        → minor
fix(modal): prevent scroll bleed on iOS    → patch
feat(tokens)!: rename color-primary        → major (!)
docs: update README                        → no release
chore: bump devDependencies                → no release
```

Run `npm run commit` for a guided prompt (Commitizen).

## Release Steps

### 1. Ensure develop is stable

```bash
git checkout develop
npm run lint
npm run type-check
npm run test:run
```

### 2. Merge develop → main

```bash
git checkout main
git merge develop
```

### 3. Generate changelog

```bash
git-cliff -o CHANGELOG.md
```

### 4. Commit changelog

```bash
git add CHANGELOG.md
git commit -m "chore: update changelog for vX.Y.Z"
```

### 5. Tag the release

```bash
git tag -a vX.Y.Z -m "Release vX.Y.Z: brief description of changes"
```

### 6. Push

```bash
git push origin main --tags
```

### 7. Automatic propagation

After pushing:

1. Bitbucket webhook triggers Jenkins CI
2. Jenkins runs quality gates (lint, type-check, test)
3. On success, Jenkins `submodule-updater` job triggers
4. Auto-PRs created in all cohort repos to update submodule pointer

### 8. Verify

- Check Jenkins CI passed
- Check auto-PRs were created in cohort repos
- Notify team on Slack/email

## Breaking Changes

For major versions:

1. Create `MIGRATION-vX.md` with upgrade instructions
2. Deprecate old APIs 1-2 releases before removal
3. Consider shipping codemods (jscodeshift) for automated migration
4. Tag with `!` in commit: `feat(button)!: remove size="xs" variant`

## Branch Strategy

```
main          ← stable releases, tagged
├── develop   ← integration branch
├── feat/*    ← feature branches
├── fix/*     ← bug fix branches
└── release/* ← release candidates (optional)
```
