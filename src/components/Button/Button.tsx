'use client';

import { type ElementType, forwardRef, type ReactNode } from 'react';
import type { NovaTestProps } from '../../types/common';
import { cn } from '../../utils/cn';
import type { PolymorphicComponentPropsWithRef } from '../../utils/polymorphic';
import { NovaSpinner } from '../Spinner/Spinner';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonOwnProps extends NovaTestProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

export type ButtonProps<C extends ElementType = 'button'> = PolymorphicComponentPropsWithRef<
  C,
  ButtonOwnProps
>;

type ButtonComponent = <C extends ElementType = 'button'>(props: ButtonProps<C>) => ReactNode;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-[var(--nova-color-primary)] text-white hover:bg-[var(--nova-color-primary-hover)] active:bg-[var(--nova-color-primary-active)] focus-visible:ring-2 focus-visible:ring-[var(--nova-border-focus)] focus-visible:ring-offset-2',
  secondary:
    'border border-[var(--nova-border-default)] bg-transparent text-[var(--nova-text-primary)] hover:bg-[var(--nova-bg-tertiary)] active:bg-[var(--nova-bg-secondary)] focus-visible:ring-2 focus-visible:ring-[var(--nova-border-focus)]',
  ghost:
    'bg-transparent text-[var(--nova-text-primary)] hover:bg-[var(--nova-bg-tertiary)] active:bg-[var(--nova-bg-secondary)] focus-visible:ring-2 focus-visible:ring-[var(--nova-border-focus)]',
  danger:
    'bg-[var(--nova-color-error)] text-white hover:opacity-90 active:opacity-80 focus-visible:ring-2 focus-visible:ring-[var(--nova-color-error)] focus-visible:ring-offset-2',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'h-8 px-3 text-sm gap-1.5',
  md: 'h-10 px-4 text-sm gap-2',
  lg: 'h-12 px-6 text-base gap-2.5',
};

function NovaButtonInner(
  {
    as,
    variant = 'primary',
    size = 'md',
    loading = false,
    disabled,
    leftIcon,
    rightIcon,
    novaTestId = 'button',
    className,
    children,
    ...rest
  }: ButtonProps,
  ref: React.Ref<HTMLButtonElement>,
) {
  const Component = as || 'button';
  const isDisabled = disabled || loading;

  return (
    <Component
      ref={ref}
      data-nova-test={novaTestId}
      disabled={isDisabled}
      aria-busy={loading || undefined}
      aria-disabled={isDisabled || undefined}
      className={cn(
        'inline-flex cursor-pointer items-center justify-center rounded-[var(--nova-radius-md)] font-medium outline-none transition-colors duration-[var(--nova-duration-fast)] ease-[var(--nova-easing-default)]',
        variantClasses[variant],
        sizeClasses[size],
        isDisabled && 'pointer-events-none opacity-50',
        className,
      )}
      {...rest}
    >
      {loading ? (
        <NovaSpinner size="sm" novaTestId={`${novaTestId}-spinner`} />
      ) : (
        leftIcon && <span data-nova-test={`${novaTestId}-left-icon`}>{leftIcon}</span>
      )}
      {children}
      {!loading && rightIcon && (
        <span data-nova-test={`${novaTestId}-right-icon`}>{rightIcon}</span>
      )}
    </Component>
  );
}

export const NovaButton = forwardRef(NovaButtonInner) as unknown as ButtonComponent;

(NovaButton as { displayName?: string }).displayName = 'NovaButton';
