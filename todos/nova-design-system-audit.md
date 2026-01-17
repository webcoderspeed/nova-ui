# Nova Design System Audit & Implementation Plan

This document outlines the detailed roadmap for elevating the Nova UI library to meet the strict standards defined in the [Design System Guidelines](../prompts/design-system.md).

## 🚨 Critical Action Items (Immediate Priority)

### 1. Token Architecture Cleanup
**Objective:** Eliminate hardcoded values and enforce semantic token usage.
- [ ] **Audit `NovaSelect`**: Refactor `neumorphic` variant shadow `[5px_5px_10px_#bebebe...]` to use design tokens (e.g., extend tailwind theme or CSS variables).
- [ ] **Audit `NovaCard`**: Standardize `glow` and `hover` shadow strings into reusable tailwind utility classes or tokens.
- [ ] **Color Review**: Ensure all colors reference `--primary`, `--secondary`, `--muted`, etc., instead of hex codes or raw tailwind colors (e.g., `blue-500` should be `info` or semantic equivalent if possible, though status colors are acceptable if standardized).

### 2. Accessibility (A11y) Hardening
**Objective:** Ensure WCAG 2.1 AA compliance.
- [ ] **Form Components (`NovaSelect`, `NovaInput`, etc.)**:
  - [ ] Ensure `error` prop links to the input via `aria-describedby`.
  - [ ] Verify `aria-invalid="true"` is applied when in error state.
- [ ] **Interactive Components (`NovaCard`, `NovaBigCalendar`)**:
  - [ ] Ensure keyboard focus visibility (focus rings) is consistent.
  - [ ] Verify keyboard navigation for `NovaBigCalendar` custom events.

### 3. Type Safety & Standardization
**Objective:** Zero `any`, strict generics, and consistent patterns.
- [ ] **`NovaBigCalendar`**:
  - [ ] Tighten `NovaEvent` interface (avoid `resource?: unknown` if possible, default to `Record<string, unknown>`).
  - [ ] Ensure `onEventDrop` and `onEventResize` callbacks are strictly typed in the component exports.
- [ ] **Prop Interfaces**:
  - [ ] Add JSDoc comments to all exported interfaces (`NovaSelectProps`, `NovaCardProps`) for Intellisense.
  - [ ] Standardize `className` overrides (ensure `cn()` is always last to allow user overrides).

---

## 🛠 Component-Specific Roadmap

### Phase 1: Core Layout & Feedback (High Usage)
| Component | Status | Tasks |
|-----------|--------|-------|
| **NovaCard** | ⚠️ Review | • Refactor inline shadow strings to tokens.<br>• Add JSDoc for `variant`, `glow`, `padding` props. |
| **NovaButton** | ⏳ Pending | • Audit for hardcoded colors.<br>• Ensure `loading` state handles `aria-busy`. |
| **NovaSheet** | ⏳ Pending | • Check focus trapping implementation.<br>• Verify mobile viewport behavior. |

### Phase 2: Form Elements (High Complexity)
| Component | Status | Tasks |
|-----------|--------|-------|
| **NovaSelect** | ⚠️ Review | • Fix `neumorphic` hardcoded shadow.<br>• Verify `error` message accessibility.<br>• Test `options` vs `groups` prop usage. |
| **NovaInput** | ⏳ Pending | • Standardize `startIcon`/`endIcon` patterns.<br>• Ensure proper label association. |
| **NovaCalendar** | ✅ Done | • (BigCalendar) Verify Drag-n-Drop types.<br>• (BigCalendar) Add keyboard shortcuts documentation. |

---

## 🧪 Quality Assurance Strategy

### Testing Requirements
- [ ] **Unit Tests**: Create `__tests__` directory in `components/nova/`.
  - [ ] Add basic render tests for all 57 components.
  - [ ] Test variant classes application (e.g., does `variant="glass"` apply the correct class?).
- [ ] **E2E & Visual Regression (Playwright)**:
  - [ ] Setup Playwright for cross-browser testing.
  - [ ] Implement visual regression tests to catch design regressions (shadows, spacing).
  - [ ] Test complex interactions (drag-and-drop, popovers) in a real browser environment.
- [ ] **Accessibility Tests**:
  - [ ] Integrate `axe-core` or similar into test suite.
  - [ ] Manual keyboard navigation audit for `NovaNavigationMenu` and `NovaDropdown`.

### Documentation
- [ ] **Code Comments**: Add TSDoc/JSDoc to all exported components and props.
- [ ] **Storybook/Docs**: (Future) Prepare for automated docs generation based on types.

---

## 📦 Distribution & Scaling

- [ ] **Exports**: Verify `components/nova/index.ts` exports *everything* required (types, sub-components, utilities).
- [ ] **Dependencies**: Audit `package.json` to ensure `react-big-calendar`, `date-fns`, etc., are properly categorized (deps vs peerDeps).

---

## 📝 Usage Guidelines for Contributors

1. **Never use hex codes** in component files. Use Tailwind semantic classes (`bg-primary`, `text-muted-foreground`).
2. **Always wrap external libraries** (like Radix or React Aria) to expose a "Nova-native" API.
3. **Strict Types only**. No `any`. Use `unknown` if absolutely necessary and cast safely.
4. **Run the linter** before marking a component as "Complete".
