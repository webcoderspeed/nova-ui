export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type Variant = 'primary' | 'secondary' | 'ghost' | 'danger';

export interface NovaTestProps {
  /** Custom test identifier — renders as data-nova-test attribute */
  novaTestId?: string;
}
