'use client';

import { type ElementType, forwardRef, type ReactNode } from 'react';
import type { NovaTestProps } from '../../types/common';
import { cn } from '../../utils/cn';
import type { PolymorphicComponentPropsWithRef } from '../../utils/polymorphic';
import { NovaSpinner } from '../Spinner/Spinner';

type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'ghost'
  | 'link'
  | 'danger'
  | 'danger-outline';

type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'icon';
type ButtonShape = 'default' | 'round' | 'circle';

interface ButtonOwnProps extends NovaTestProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  shape?: ButtonShape;
  loading?: boolean;
  block?: boolean;
  iconOnly?: boolean;
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
    'border border-[var(--nova-border-default)] bg-[var(--nova-bg-secondary)] text-[var(--nova-text-primary)] hover:bg-[var(--nova-bg-tertiary)] active:bg-[var(--nova-bg-secondary)] focus-visible:ring-2 focus-visible:ring-[var(--nova-border-focus)]',
  outline:
    'border border-[var(--nova-border-default)] bg-transparent text-[var(--nova-text-primary)] hover:bg-[var(--nova-bg-secondary)] active:bg-[var(--nova-bg-tertiary)] focus-visible:ring-2 focus-visible:ring-[var(--nova-border-focus)]',
  ghost:
    'bg-transparent text-[var(--nova-text-primary)] hover:bg-[var(--nova-bg-tertiary)] active:bg-[var(--nova-bg-secondary)] focus-visible:ring-2 focus-visible:ring-[var(--nova-border-focus)]',
  link: 'bg-transparent text-[var(--nova-text-link)] underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-[var(--nova-border-focus)] p-0 h-auto',
  danger:
    'bg-[var(--nova-color-error)] text-white hover:opacity-90 active:opacity-80 focus-visible:ring-2 focus-visible:ring-[var(--nova-color-error)] focus-visible:ring-offset-2',
  'danger-outline':
    'border border-[var(--nova-color-error)] bg-transparent text-[var(--nova-color-error)] hover:bg-[var(--nova-color-error)] hover:text-white active:opacity-90 focus-visible:ring-2 focus-visible:ring-[var(--nova-color-error)]',
};

const sizeClasses: Record<ButtonSize, string> = {
  xs: 'h-7 px-2.5 text-xs gap-1',
  sm: 'h-8 px-3 text-sm gap-1.5',
  md: 'h-10 px-4 text-sm gap-2',
  lg: 'h-12 px-6 text-base gap-2.5',
  icon: 'h-10 w-10 p-0',
};

const shapeClasses: Record<ButtonShape, string> = {
  default: 'rounded-[var(--nova-radius-md)]',
  round: 'rounded-full',
  circle: 'rounded-full',
};

function NovaButtonInner(
  {
    as,
    variant = 'primary',
    size = 'md',
    shape = 'default',
    loading = false,
    block = false,
    iconOnly = false,
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

  const effectiveSize = iconOnly && size !== 'icon' ? 'icon' : size;

  return (
    <Component
      ref={ref}
      data-nova-test={novaTestId}
      disabled={isDisabled}
      aria-busy={loading || undefined}
      aria-disabled={isDisabled || undefined}
      className={cn(
        'inline-flex cursor-pointer items-center justify-center font-medium transition-colors duration-[var(--nova-duration-fast)] ease-[var(--nova-easing-default)] outline-none',
        shapeClasses[iconOnly && shape === 'default' ? 'default' : shape],
        variantClasses[variant],
        variant !== 'link' && sizeClasses[effectiveSize],
        block && 'w-full',
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
