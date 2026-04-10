import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { axe } from 'vitest-axe';
import { NovaBreadcrumb } from './Breadcrumb';
import { BREADCRUMB_TEST_IDS } from './Breadcrumb.testIds';

const items = [
  { label: 'Home', href: '/' },
  { label: 'Components', href: '/components' },
  { label: 'Breadcrumb' },
];

describe('NovaBreadcrumb', () => {
  it('renders all items', () => {
    render(<NovaBreadcrumb items={items} />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Components')).toBeInTheDocument();
    expect(screen.getByText('Breadcrumb')).toBeInTheDocument();
  });

  it('marks last item as current page', () => {
    render(<NovaBreadcrumb items={items} />);
    const last = screen.getByText('Breadcrumb');
    expect(last).toHaveAttribute('aria-current', 'page');
  });

  it('renders links for items with href', () => {
    render(<NovaBreadcrumb items={items} />);
    expect(screen.getByText('Home').tagName).toBe('A');
    expect(screen.getByText('Components').tagName).toBe('A');
  });

  it('renders last item as non-link even with href', () => {
    render(
      <NovaBreadcrumb
        items={[
          { label: 'A', href: '/a' },
          { label: 'B', href: '/b' },
        ]}
      />,
    );
    expect(screen.getByText('B').tagName).toBe('SPAN');
  });

  it('has nav landmark with proper label', () => {
    render(<NovaBreadcrumb items={items} />);
    expect(screen.getByRole('navigation', { name: 'Breadcrumb' })).toBeInTheDocument();
  });

  it('applies correct test IDs', () => {
    render(<NovaBreadcrumb items={items} />);
    expect(screen.getByText('Home')).toHaveAttribute('data-nova-test', BREADCRUMB_TEST_IDS.item(0));
  });

  it('renders custom separator', () => {
    render(<NovaBreadcrumb items={items} separator={<span data-testid="sep">/</span>} />);
    const seps = screen.getAllByTestId('sep');
    expect(seps).toHaveLength(2);
  });

  it('has no a11y violations', async () => {
    const { container } = render(<NovaBreadcrumb items={items} />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
