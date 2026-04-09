import { forwardRef, type HTMLAttributes } from 'react';
import type { NovaTestProps } from '../../types/common';
import { cn } from '../../utils/cn';

type CardVariant = 'elevated' | 'outlined' | 'filled';

interface CardRootProps extends HTMLAttributes<HTMLDivElement>, NovaTestProps {
  variant?: CardVariant;
}

const variantClasses: Record<CardVariant, string> = {
  elevated:
    'bg-[var(--nova-surface-raised)] shadow-[var(--nova-shadow-md)] border border-transparent',
  outlined: 'bg-[var(--nova-bg-primary)] border border-[var(--nova-border-default)]',
  filled: 'bg-[var(--nova-bg-secondary)] border border-transparent',
};

const NovaCardRoot = forwardRef<HTMLDivElement, CardRootProps>(
  ({ variant = 'elevated', novaTestId = 'card', className, ...rest }, ref) => (
    <div
      ref={ref}
      data-nova-test={novaTestId}
      className={cn(
        'rounded-[var(--nova-radius-lg)] transition-shadow duration-[var(--nova-duration-normal)]',
        variantClasses[variant],
        className,
      )}
      {...rest}
    />
  ),
);
NovaCardRoot.displayName = 'NovaCard';

const NovaCardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement> & NovaTestProps>(
  ({ novaTestId = 'card-header', className, ...rest }, ref) => (
    <div
      ref={ref}
      data-nova-test={novaTestId}
      className={cn('px-6 pt-6 pb-0', className)}
      {...rest}
    />
  ),
);
NovaCardHeader.displayName = 'NovaCard.Header';

const NovaCardBody = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement> & NovaTestProps>(
  ({ novaTestId = 'card-body', className, ...rest }, ref) => (
    <div ref={ref} data-nova-test={novaTestId} className={cn('px-6 py-4', className)} {...rest} />
  ),
);
NovaCardBody.displayName = 'NovaCard.Body';

const NovaCardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement> & NovaTestProps>(
  ({ novaTestId = 'card-footer', className, ...rest }, ref) => (
    <div
      ref={ref}
      data-nova-test={novaTestId}
      className={cn('px-6 pb-6 pt-0 flex items-center gap-2', className)}
      {...rest}
    />
  ),
);
NovaCardFooter.displayName = 'NovaCard.Footer';

export const NovaCard = Object.assign(NovaCardRoot, {
  Header: NovaCardHeader,
  Body: NovaCardBody,
  Footer: NovaCardFooter,
});
