'use client';

import { NovaButton } from '@nova-ui/components/Button';
import { NovaCard, NovaCardBody, NovaCardHeader } from '@nova-ui/components/Card';
import { NovaInput } from '@nova-ui/components/Input';
import { NovaHeading, NovaText } from '@nova-ui/components/Typography';
import { useTheme } from '@nova-ui/hooks/use-theme';

export default function Home() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="min-h-screen bg-[var(--nova-bg-primary)] p-8">
      <div className="mx-auto max-w-2xl space-y-8">
        <div className="flex items-center justify-between">
          <NovaHeading level={1}>Nova UI — Next.js Example</NovaHeading>
          <div className="flex gap-2">
            {(['light', 'dark', 'system'] as const).map((t) => (
              <NovaButton
                key={t}
                variant={theme === t ? 'primary' : 'secondary'}
                size="sm"
                onClick={() => setTheme(t)}
              >
                {t}
              </NovaButton>
            ))}
          </div>
        </div>

        <NovaCard>
          <NovaCardHeader>
            <NovaHeading level={3}>Getting Started</NovaHeading>
          </NovaCardHeader>
          <NovaCardBody>
            <NovaText>
              This example demonstrates consuming Nova UI as a git submodule in a Next.js project.
            </NovaText>
            <div className="mt-4 space-y-4">
              <NovaInput label="Name" placeholder="Enter your name" />
              <NovaButton variant="primary">Submit</NovaButton>
            </div>
          </NovaCardBody>
        </NovaCard>
      </div>
    </div>
  );
}
