import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { axe } from 'vitest-axe';
import { NovaCard } from './Card';
import { CARD_TEST_IDS } from './Card.testIds';

describe('NovaCard', () => {
  it('renders with compound children', () => {
    const { container } = render(
      <NovaCard>
        <NovaCard.Header>Title</NovaCard.Header>
        <NovaCard.Body>Content</NovaCard.Body>
        <NovaCard.Footer>Actions</NovaCard.Footer>
      </NovaCard>,
    );

    expect(container.querySelector(`[data-nova-test="${CARD_TEST_IDS.root}"]`)).toBeInTheDocument();
    expect(container.querySelector(`[data-nova-test="${CARD_TEST_IDS.header}"]`)).toHaveTextContent(
      'Title',
    );
    expect(container.querySelector(`[data-nova-test="${CARD_TEST_IDS.body}"]`)).toHaveTextContent(
      'Content',
    );
    expect(container.querySelector(`[data-nova-test="${CARD_TEST_IDS.footer}"]`)).toHaveTextContent(
      'Actions',
    );
  });

  it('renders without optional sections', () => {
    const { container } = render(
      <NovaCard>
        <NovaCard.Body>Just body</NovaCard.Body>
      </NovaCard>,
    );

    expect(container.querySelector(`[data-nova-test="${CARD_TEST_IDS.root}"]`)).toBeInTheDocument();
    expect(container.querySelector(`[data-nova-test="${CARD_TEST_IDS.body}"]`)).toBeInTheDocument();
    expect(
      container.querySelector(`[data-nova-test="${CARD_TEST_IDS.header}"]`),
    ).not.toBeInTheDocument();
    expect(
      container.querySelector(`[data-nova-test="${CARD_TEST_IDS.footer}"]`),
    ).not.toBeInTheDocument();
  });

  it('applies variant classes', () => {
    const { container, rerender } = render(<NovaCard variant="outlined">Content</NovaCard>);
    expect(container.querySelector(`[data-nova-test="${CARD_TEST_IDS.root}"]`)).toHaveClass(
      'border-[var(--nova-border-default)]',
    );

    rerender(<NovaCard variant="filled">Content</NovaCard>);
    expect(container.querySelector(`[data-nova-test="${CARD_TEST_IDS.root}"]`)).toHaveClass(
      'bg-[var(--nova-bg-secondary)]',
    );
  });

  it('accepts custom novaTestId', () => {
    const { container } = render(<NovaCard novaTestId="profile-card">Content</NovaCard>);
    expect(container.querySelector('[data-nova-test="profile-card"]')).toBeInTheDocument();
  });

  it('forwards ref', () => {
    const ref = { current: null } as React.RefObject<HTMLDivElement | null>;
    render(<NovaCard ref={ref}>Content</NovaCard>);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it('has no a11y violations', async () => {
    const { container } = render(
      <NovaCard>
        <NovaCard.Header>Title</NovaCard.Header>
        <NovaCard.Body>Content</NovaCard.Body>
      </NovaCard>,
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
