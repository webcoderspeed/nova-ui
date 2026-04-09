'use client';

import {
  createContext,
  forwardRef,
  type InputHTMLAttributes,
  type ReactNode,
  useContext,
} from 'react';
import { useStableId } from '../../hooks/use-id';
import type { NovaTestProps } from '../../types/common';
import { cn } from '../../utils/cn';

interface RadioGroupContextValue {
  name: string;
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
}

const RadioGroupContext = createContext<RadioGroupContextValue | undefined>(undefined);

interface RadioGroupProps extends NovaTestProps {
  name: string;
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  children: ReactNode;
  className?: string;
}

export function NovaRadioGroup({
  name,
  value,
  onChange,
  disabled,
  novaTestId = 'radio-group',
  className,
  children,
}: RadioGroupProps) {
  return (
    <RadioGroupContext.Provider value={{ name, value, onChange, disabled }}>
      <div
        role="radiogroup"
        data-nova-test={novaTestId}
        className={cn('flex flex-col gap-2', className)}
      >
        {children}
      </div>
    </RadioGroupContext.Provider>
  );
}

interface RadioProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'onChange'>,
    NovaTestProps {
  label?: string;
  radioValue: string;
}

export const NovaRadio = forwardRef<HTMLInputElement, RadioProps>(
  ({ label, radioValue, novaTestId = 'radio', className, id: propId, ...rest }, ref) => {
    const group = useContext(RadioGroupContext);
    const generatedId = useStableId('nova-radio');
    const inputId = propId || generatedId;
    const isChecked = group ? group.value === radioValue : rest.checked;
    const isDisabled = rest.disabled || group?.disabled;

    return (
      <div data-nova-test={novaTestId} className="inline-flex items-center gap-2">
        <input
          ref={ref}
          id={inputId}
          type="radio"
          name={group?.name || rest.name}
          value={radioValue}
          checked={isChecked}
          disabled={isDisabled}
          data-nova-test={`${novaTestId}-input`}
          onChange={() => group?.onChange?.(radioValue)}
          className={cn(
            'h-4 w-4 cursor-pointer accent-[var(--nova-color-primary)]',
            'focus-visible:ring-2 focus-visible:ring-[var(--nova-border-focus)] focus-visible:ring-offset-1',
            'disabled:cursor-not-allowed disabled:opacity-50',
            className,
          )}
          {...rest}
        />
        {label && (
          <label
            htmlFor={inputId}
            data-nova-test={`${novaTestId}-label`}
            className="cursor-pointer text-sm text-[var(--nova-text-primary)] select-none"
          >
            {label}
          </label>
        )}
      </div>
    );
  },
);

NovaRadio.displayName = 'NovaRadio';
