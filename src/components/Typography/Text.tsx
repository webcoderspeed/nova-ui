import { type ElementType, forwardRef, type ReactNode } from 'react';
import type { NovaTestProps } from '../../types/common';
import { cn } from '../../utils/cn';
import type { PolymorphicComponentPropsWithRef } from '../../utils/polymorphic';

type TextSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
type TextWeight = 'thin' | 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold';
type TextColor =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'inverse'
  | 'link'
  | 'success'
  | 'error'
  | 'warning';

interface TextOwnProps extends NovaTestProps {
  size?: TextSize;
  weight?: TextWeight;
  color?: TextColor;
  truncate?: boolean;
}

export type TextProps<C extends ElementType = 'span'> = PolymorphicComponentPropsWithRef<
  C,
  TextOwnProps
>;

type TextComponent = <C extends ElementType = 'span'>(props: TextProps<C>) => ReactNode;

const sizeClasses: Record<TextSize, string> = {
  xs: 'text-[length:var(--nova-text-xs)]',
  sm: 'text-[length:var(--nova-text-sm)]',
  base: 'text-[length:var(--nova-text-base)]',
  lg: 'text-[length:var(--nova-text-lg)]',
  xl: 'text-[length:var(--nova-text-xl)]',
  '2xl': 'text-[length:var(--nova-text-2xl)]',
  '3xl': 'text-[length:var(--nova-text-3xl)]',
  '4xl': 'text-[length:var(--nova-text-4xl)]',
};

const colorClasses: Record<TextColor, string> = {
  primary: 'text-[color:var(--nova-text-primary)]',
  secondary: 'text-[color:var(--nova-text-secondary)]',
  tertiary: 'text-[color:var(--nova-text-tertiary)]',
  inverse: 'text-[color:var(--nova-text-inverse)]',
  link: 'text-[color:var(--nova-text-link)]',
  success: 'text-[color:var(--nova-color-success)]',
  error: 'text-[color:var(--nova-color-error)]',
  warning: 'text-[color:var(--nova-color-warning)]',
};

const weightClasses: Record<TextWeight, string> = {
  thin: 'font-thin',
  light: 'font-light',
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
  extrabold: 'font-extrabold',
};

function NovaTextInner(
  {
    as,
    size = 'base',
    weight = 'normal',
    color = 'primary',
    truncate,
    novaTestId = 'text',
    className,
    ...rest
  }: TextProps,
  ref: React.Ref<HTMLSpanElement>,
) {
  const Component = as || 'span';

  return (
    <Component
      ref={ref}
      data-nova-test={novaTestId}
      className={cn(
        sizeClasses[size],
        weightClasses[weight],
        colorClasses[color],
        truncate && 'truncate',
        className,
      )}
      {...rest}
    />
  );
}

export const NovaText = forwardRef(NovaTextInner) as unknown as TextComponent;

(NovaText as { displayName?: string }).displayName = 'NovaText';
