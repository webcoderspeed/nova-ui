import { type ElementType, forwardRef, type ReactNode } from 'react';
import type { NovaTestProps } from '../../types/common';
import { cn } from '../../utils/cn';
import type { PolymorphicComponentPropsWithRef } from '../../utils/polymorphic';

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

interface HeadingOwnProps extends NovaTestProps {
  level?: HeadingLevel;
}

export type HeadingProps<C extends ElementType = 'h2'> = PolymorphicComponentPropsWithRef<
  C,
  HeadingOwnProps
>;

type HeadingComponent = <C extends ElementType = 'h2'>(props: HeadingProps<C>) => ReactNode;

const levelStyles: Record<HeadingLevel, string> = {
  1: 'text-[length:var(--nova-text-4xl)] font-bold leading-[var(--nova-leading-tight)]',
  2: 'text-[length:var(--nova-text-3xl)] font-bold leading-[var(--nova-leading-tight)]',
  3: 'text-[length:var(--nova-text-2xl)] font-semibold leading-[var(--nova-leading-snug)]',
  4: 'text-[length:var(--nova-text-xl)] font-semibold leading-[var(--nova-leading-snug)]',
  5: 'text-[length:var(--nova-text-lg)] font-medium leading-[var(--nova-leading-normal)]',
  6: 'text-[length:var(--nova-text-base)] font-medium leading-[var(--nova-leading-normal)]',
};

const levelTags: Record<HeadingLevel, string> = {
  1: 'h1',
  2: 'h2',
  3: 'h3',
  4: 'h4',
  5: 'h5',
  6: 'h6',
};

function NovaHeadingInner(
  { as, level = 2, novaTestId = 'heading', className, ...rest }: HeadingProps,
  ref: React.Ref<HTMLHeadingElement>,
) {
  const Component = (as || levelTags[level]) as ElementType;

  return (
    <Component
      ref={ref}
      data-nova-test={novaTestId}
      className={cn('text-[color:var(--nova-text-primary)]', levelStyles[level], className)}
      {...rest}
    />
  );
}

export const NovaHeading = forwardRef(NovaHeadingInner) as unknown as HeadingComponent;

(NovaHeading as { displayName?: string }).displayName = 'NovaHeading';
