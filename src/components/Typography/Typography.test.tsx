import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { axe } from 'vitest-axe';
import { NovaHeading } from './Heading';
import { NovaText } from './Text';

describe('Text', () => {
  it('renders as span by default', () => {
    render(<NovaText>Hello</NovaText>);
    const el = screen.getByText('Hello');
    expect(el.tagName).toBe('SPAN');
    expect(el).toHaveAttribute('data-nova-test', 'text');
  });

  it('renders as paragraph with as="p"', () => {
    render(<NovaText as="p">Paragraph</NovaText>);
    expect(screen.getByText('Paragraph').tagName).toBe('P');
  });

  it('applies size and weight classes', () => {
    render(
      <NovaText size="lg" weight="bold">
        Large Bold
      </NovaText>,
    );
    const el = screen.getByText('Large Bold');
    expect(el).toHaveClass('font-bold');
  });

  it('applies truncate class', () => {
    render(<NovaText truncate>Long text</NovaText>);
    expect(screen.getByText('Long text')).toHaveClass('truncate');
  });

  it('accepts custom novaTestId', () => {
    render(<NovaText novaTestId="custom-text">Custom</NovaText>);
    expect(screen.getByText('Custom')).toHaveAttribute('data-nova-test', 'custom-text');
  });

  it('forwards ref', () => {
    const ref = { current: null } as React.RefObject<HTMLSpanElement | null>;
    render(<NovaText ref={ref}>Ref</NovaText>);
    expect(ref.current).toBeInstanceOf(HTMLSpanElement);
  });

  it('has no a11y violations', async () => {
    const { container } = render(<NovaText as="p">Accessible text</NovaText>);
    expect(await axe(container)).toHaveNoViolations();
  });
});

describe('Heading', () => {
  it('renders as h2 by default', () => {
    render(<NovaHeading>Title</NovaHeading>);
    const el = screen.getByRole('heading', { level: 2 });
    expect(el).toHaveTextContent('Title');
    expect(el).toHaveAttribute('data-nova-test', 'heading');
  });

  it('renders correct heading level', () => {
    const { rerender } = render(<NovaHeading level={1}>H1</NovaHeading>);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();

    rerender(<NovaHeading level={3}>H3</NovaHeading>);
    expect(screen.getByRole('heading', { level: 3 })).toBeInTheDocument();

    rerender(<NovaHeading level={6}>H6</NovaHeading>);
    expect(screen.getByRole('heading', { level: 6 })).toBeInTheDocument();
  });

  it('accepts custom novaTestId', () => {
    render(<NovaHeading novaTestId="page-title">Page</NovaHeading>);
    expect(screen.getByRole('heading')).toHaveAttribute('data-nova-test', 'page-title');
  });

  it('can render as different element with as prop', () => {
    render(<NovaHeading as="div">Div Heading</NovaHeading>);
    expect(screen.getByText('Div Heading').tagName).toBe('DIV');
  });

  it('forwards ref', () => {
    const ref = { current: null } as React.RefObject<HTMLHeadingElement | null>;
    render(<NovaHeading ref={ref}>Ref</NovaHeading>);
    expect(ref.current).toBeInstanceOf(HTMLHeadingElement);
  });

  it('has no a11y violations', async () => {
    const { container } = render(<NovaHeading level={1}>Accessible Heading</NovaHeading>);
    expect(await axe(container)).toHaveNoViolations();
  });
});
