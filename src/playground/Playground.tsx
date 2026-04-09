import { useState } from 'react';
import { NovaAvatar } from '../components/Avatar';
import { NovaBadge } from '../components/Badge';
import { NovaButton } from '../components/Button';
import { NovaCard } from '../components/Card';
import { NovaCheckbox } from '../components/Checkbox';
import { NovaInput } from '../components/Input';
import { NovaModal } from '../components/Modal';
import { NovaRadio, NovaRadioGroup } from '../components/Radio';
import { NovaSpinner } from '../components/Spinner';
import { NovaSwitch } from '../components/Switch';
import { NovaTable } from '../components/Table';
import { NovaTabs } from '../components/Tabs';
import { NovaToastProvider, useToast } from '../components/Toast';
import { NovaTooltip } from '../components/Tooltip';
import { NovaHeading, NovaText } from '../components/Typography';
import { NovaThemeProvider, useTheme } from '../hooks/use-theme';

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <select
      value={theme}
      onChange={(e) => setTheme(e.target.value as 'light' | 'dark' | 'system')}
      className="rounded-[var(--nova-radius-md)] border border-[var(--nova-border-default)] bg-[var(--nova-bg-primary)] px-3 py-1.5 text-sm text-[var(--nova-text-primary)]"
    >
      <option value="light">Light</option>
      <option value="dark">Dark</option>
      <option value="system">System</option>
    </select>
  );
}

function ToastDemo() {
  const { toast } = useToast();
  return (
    <div className="flex gap-2 flex-wrap">
      <NovaButton
        size="sm"
        variant="primary"
        onClick={() => toast('Info message', { variant: 'info' })}
      >
        Info Toast
      </NovaButton>
      <NovaButton
        size="sm"
        variant="primary"
        onClick={() => toast('Success!', { variant: 'success' })}
      >
        Success Toast
      </NovaButton>
      <NovaButton
        size="sm"
        variant="danger"
        onClick={() => toast('Error occurred', { variant: 'error' })}
      >
        Error Toast
      </NovaButton>
      <NovaButton
        size="sm"
        variant="secondary"
        onClick={() => toast('Warning!', { variant: 'warning' })}
      >
        Warning Toast
      </NovaButton>
    </div>
  );
}

function PlaygroundContent() {
  const { resolvedTheme } = useTheme();
  const [modalOpen, setModalOpen] = useState(false);
  const [radioValue, setRadioValue] = useState('react');
  const [switchOn, setSwitchOn] = useState(false);

  return (
    <div className="min-h-screen bg-[var(--nova-bg-primary)] p-8 transition-colors duration-[var(--nova-duration-normal)]">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-10 flex items-center justify-between">
          <div>
            <NovaHeading level={1}>Nova UI Playground</NovaHeading>
            <NovaText color="secondary" className="mt-1">
              Theme: {resolvedTheme} | 15 components
            </NovaText>
          </div>
          <ThemeToggle />
        </div>

        <div className="space-y-16">
          {/* Buttons */}
          <section>
            <NovaHeading level={2} className="mb-4">
              NovaButton
            </NovaHeading>
            <div className="space-y-4">
              <div className="flex items-center gap-3 flex-wrap">
                <NovaButton variant="primary">Primary</NovaButton>
                <NovaButton variant="secondary">Secondary</NovaButton>
                <NovaButton variant="ghost">Ghost</NovaButton>
                <NovaButton variant="danger">Danger</NovaButton>
              </div>
              <div className="flex items-center gap-3">
                <NovaButton size="sm">Small</NovaButton>
                <NovaButton size="md">Medium</NovaButton>
                <NovaButton size="lg">Large</NovaButton>
              </div>
              <div className="flex items-center gap-3">
                <NovaButton loading>Loading</NovaButton>
                <NovaButton disabled>Disabled</NovaButton>
                <NovaButton as="a" href="#" variant="secondary">
                  As Link
                </NovaButton>
              </div>
            </div>
          </section>

          {/* Typography */}
          <section>
            <NovaHeading level={2} className="mb-4">
              Typography
            </NovaHeading>
            <div className="space-y-2">
              <NovaHeading level={1}>Heading 1</NovaHeading>
              <NovaHeading level={2}>Heading 2</NovaHeading>
              <NovaHeading level={3}>Heading 3</NovaHeading>
              <NovaHeading level={4}>Heading 4</NovaHeading>
              <NovaText size="lg">Large text</NovaText>
              <NovaText as="p">Base text — The quick brown fox jumps over the lazy dog.</NovaText>
              <NovaText as="p" size="sm" color="secondary">
                Small secondary text
              </NovaText>
              <NovaText as="p" size="xs" color="tertiary">
                Extra small tertiary text
              </NovaText>
              <NovaText weight="bold" color="link">
                Bold link text
              </NovaText>
            </div>
          </section>

          {/* Badge */}
          <section>
            <NovaHeading level={2} className="mb-4">
              NovaBadge
            </NovaHeading>
            <div className="flex items-center gap-3 flex-wrap">
              <NovaBadge>Default</NovaBadge>
              <NovaBadge variant="success">Success</NovaBadge>
              <NovaBadge variant="warning">Warning</NovaBadge>
              <NovaBadge variant="error">Error</NovaBadge>
              <NovaBadge variant="info">Info</NovaBadge>
              <NovaBadge variant="success" dot>
                Active
              </NovaBadge>
              <NovaBadge size="sm">Small</NovaBadge>
              <NovaBadge size="lg">Large</NovaBadge>
            </div>
          </section>

          {/* Avatar */}
          <section>
            <NovaHeading level={2} className="mb-4">
              NovaAvatar
            </NovaHeading>
            <div className="flex items-center gap-4">
              <NovaAvatar size="xs" fallback="JD" />
              <NovaAvatar size="sm" fallback="AB" />
              <NovaAvatar size="md" fallback="Nova" />
              <NovaAvatar size="lg" fallback="UI" />
              <NovaAvatar size="xl" fallback="XL" />
            </div>
          </section>

          {/* Spinner */}
          <section>
            <NovaHeading level={2} className="mb-4">
              NovaSpinner
            </NovaHeading>
            <div className="flex items-center gap-4">
              <NovaSpinner size="sm" />
              <NovaSpinner size="md" />
              <NovaSpinner size="lg" />
            </div>
          </section>

          {/* Input */}
          <section>
            <NovaHeading level={2} className="mb-4">
              NovaInput
            </NovaHeading>
            <div className="grid grid-cols-2 gap-4 max-w-xl">
              <NovaInput label="Name" placeholder="John Doe" />
              <NovaInput label="Email" type="email" placeholder="john@example.com" required />
              <NovaInput label="With error" error="This field is required" />
              <NovaInput label="With helper" helperText="We'll never share your data" />
              <NovaInput label="Disabled" disabled defaultValue="Can't edit" />
              <NovaInput label="Sizes" inputSize="lg" placeholder="Large input" />
            </div>
          </section>

          {/* Card */}
          <section>
            <NovaHeading level={2} className="mb-4">
              NovaCard
            </NovaHeading>
            <div className="grid grid-cols-3 gap-4">
              <NovaCard variant="elevated">
                <NovaCard.Header>
                  <NovaText weight="semibold">Elevated</NovaText>
                </NovaCard.Header>
                <NovaCard.Body>
                  <NovaText size="sm" color="secondary">
                    Card with shadow
                  </NovaText>
                </NovaCard.Body>
                <NovaCard.Footer>
                  <NovaButton size="sm">Action</NovaButton>
                </NovaCard.Footer>
              </NovaCard>
              <NovaCard variant="outlined">
                <NovaCard.Header>
                  <NovaText weight="semibold">Outlined</NovaText>
                </NovaCard.Header>
                <NovaCard.Body>
                  <NovaText size="sm" color="secondary">
                    Card with border
                  </NovaText>
                </NovaCard.Body>
              </NovaCard>
              <NovaCard variant="filled">
                <NovaCard.Header>
                  <NovaText weight="semibold">Filled</NovaText>
                </NovaCard.Header>
                <NovaCard.Body>
                  <NovaText size="sm" color="secondary">
                    Card with background
                  </NovaText>
                </NovaCard.Body>
              </NovaCard>
            </div>
          </section>

          {/* Form Controls */}
          <section>
            <NovaHeading level={2} className="mb-4">
              Form Controls
            </NovaHeading>
            <div className="space-y-4 max-w-md">
              <NovaCheckbox label="Accept terms and conditions" />
              <NovaCheckbox label="Subscribe to newsletter" defaultChecked />
              <NovaCheckbox label="Indeterminate" indeterminate />
              <NovaCheckbox label="Disabled" disabled />

              <div className="pt-4">
                <NovaText weight="medium" className="mb-2">
                  Favorite Framework:
                </NovaText>
                <NovaRadioGroup name="framework" value={radioValue} onChange={setRadioValue}>
                  <NovaRadio radioValue="react" label="React" />
                  <NovaRadio radioValue="vue" label="Vue" />
                  <NovaRadio radioValue="angular" label="Angular" />
                </NovaRadioGroup>
              </div>

              <div className="pt-4">
                <NovaSwitch
                  label="Dark mode"
                  checked={switchOn}
                  onChange={() => setSwitchOn(!switchOn)}
                />
              </div>
            </div>
          </section>

          {/* Tabs */}
          <section>
            <NovaHeading level={2} className="mb-4">
              NovaTabs
            </NovaHeading>
            <NovaTabs defaultValue="overview">
              <NovaTabs.List>
                <NovaTabs.Trigger value="overview">Overview</NovaTabs.Trigger>
                <NovaTabs.Trigger value="features">Features</NovaTabs.Trigger>
                <NovaTabs.Trigger value="usage">Usage</NovaTabs.Trigger>
              </NovaTabs.List>
              <NovaTabs.Content value="overview">
                <NovaText as="p" color="secondary">
                  Nova UI is a design system built from scratch with React + TypeScript +
                  TailwindCSS v4.
                </NovaText>
              </NovaTabs.Content>
              <NovaTabs.Content value="features">
                <NovaText as="p" color="secondary">
                  15 components, polymorphic, compound patterns, a11y, dark mode, fluid typography.
                </NovaText>
              </NovaTabs.Content>
              <NovaTabs.Content value="usage">
                <NovaText as="p" color="secondary">
                  Add as git submodule, configure @source in Tailwind, import and use.
                </NovaText>
              </NovaTabs.Content>
            </NovaTabs>
          </section>

          {/* Tooltip */}
          <section>
            <NovaHeading level={2} className="mb-4">
              NovaTooltip
            </NovaHeading>
            <div className="flex gap-4">
              <NovaTooltip content="Top tooltip" position="top">
                <NovaButton variant="secondary" size="sm">
                  Top
                </NovaButton>
              </NovaTooltip>
              <NovaTooltip content="Bottom tooltip" position="bottom">
                <NovaButton variant="secondary" size="sm">
                  Bottom
                </NovaButton>
              </NovaTooltip>
              <NovaTooltip content="Left tooltip" position="left">
                <NovaButton variant="secondary" size="sm">
                  Left
                </NovaButton>
              </NovaTooltip>
              <NovaTooltip content="Right tooltip" position="right">
                <NovaButton variant="secondary" size="sm">
                  Right
                </NovaButton>
              </NovaTooltip>
            </div>
          </section>

          {/* Modal */}
          <section>
            <NovaHeading level={2} className="mb-4">
              NovaModal
            </NovaHeading>
            <NovaButton onClick={() => setModalOpen(true)}>Open Modal</NovaButton>
            <NovaModal open={modalOpen} onClose={() => setModalOpen(false)}>
              <NovaModal.Overlay />
              <NovaModal.Content>
                <NovaModal.Close />
                <NovaModal.Header>
                  <NovaModal.Title>Confirm Action</NovaModal.Title>
                </NovaModal.Header>
                <NovaModal.Body>
                  <NovaText as="p" color="secondary">
                    Are you sure you want to proceed? This action cannot be undone.
                  </NovaText>
                </NovaModal.Body>
                <NovaModal.Footer>
                  <NovaButton variant="secondary" size="sm" onClick={() => setModalOpen(false)}>
                    Cancel
                  </NovaButton>
                  <NovaButton variant="primary" size="sm" onClick={() => setModalOpen(false)}>
                    Confirm
                  </NovaButton>
                </NovaModal.Footer>
              </NovaModal.Content>
            </NovaModal>
          </section>

          {/* Toast */}
          <section>
            <NovaHeading level={2} className="mb-4">
              NovaToast
            </NovaHeading>
            <ToastDemo />
          </section>

          {/* Table */}
          <section>
            <NovaHeading level={2} className="mb-4">
              NovaTable
            </NovaHeading>
            <NovaTable bordered>
              <NovaTable.Head>
                <NovaTable.Row>
                  <NovaTable.HeaderCell>Component</NovaTable.HeaderCell>
                  <NovaTable.HeaderCell>Pattern</NovaTable.HeaderCell>
                  <NovaTable.HeaderCell>Tests</NovaTable.HeaderCell>
                </NovaTable.Row>
              </NovaTable.Head>
              <NovaTable.Body>
                <NovaTable.Row>
                  <NovaTable.Cell>NovaButton</NovaTable.Cell>
                  <NovaTable.Cell>
                    <NovaBadge variant="info" size="sm">
                      Polymorphic
                    </NovaBadge>
                  </NovaTable.Cell>
                  <NovaTable.Cell>16</NovaTable.Cell>
                </NovaTable.Row>
                <NovaTable.Row>
                  <NovaTable.Cell>NovaTabs</NovaTable.Cell>
                  <NovaTable.Cell>
                    <NovaBadge variant="success" size="sm">
                      Compound
                    </NovaBadge>
                  </NovaTable.Cell>
                  <NovaTable.Cell>10</NovaTable.Cell>
                </NovaTable.Row>
                <NovaTable.Row>
                  <NovaTable.Cell>NovaModal</NovaTable.Cell>
                  <NovaTable.Cell>
                    <NovaBadge variant="warning" size="sm">
                      Compound + Portal
                    </NovaBadge>
                  </NovaTable.Cell>
                  <NovaTable.Cell>10</NovaTable.Cell>
                </NovaTable.Row>
                <NovaTable.Row>
                  <NovaTable.Cell>NovaToast</NovaTable.Cell>
                  <NovaTable.Cell>
                    <NovaBadge variant="error" size="sm">
                      Provider + Hook
                    </NovaBadge>
                  </NovaTable.Cell>
                  <NovaTable.Cell>7</NovaTable.Cell>
                </NovaTable.Row>
              </NovaTable.Body>
            </NovaTable>
          </section>

          {/* Color Tokens */}
          <section>
            <NovaHeading level={2} className="mb-4">
              Design Tokens
            </NovaHeading>
            <div className="grid grid-cols-4 gap-3">
              <div className="rounded-lg bg-(--nova-color-primary) p-4 text-white text-sm">
                Primary
              </div>
              <div className="rounded-lg bg-(--nova-color-success) p-4 text-white text-sm">
                Success
              </div>
              <div className="rounded-lg bg-(--nova-color-warning) p-4 text-white text-sm">
                Warning
              </div>
              <div className="rounded-lg bg-(--nova-color-error) p-4 text-white text-sm">Error</div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export function Playground() {
  return (
    <NovaThemeProvider>
      <NovaToastProvider>
        <PlaygroundContent />
      </NovaToastProvider>
    </NovaThemeProvider>
  );
}
