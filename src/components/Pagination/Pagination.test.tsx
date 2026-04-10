import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { axe } from 'vitest-axe';
import { NovaPagination } from './Pagination';

function setup(props: Partial<React.ComponentProps<typeof NovaPagination>> = {}) {
  const onChange = props.onChange ?? vi.fn();
  const result = render(<NovaPagination page={1} totalPages={5} onChange={onChange} {...props} />);
  return { ...result, onChange };
}

describe('NovaPagination', () => {
  it('renders page buttons', () => {
    setup({ page: 3, totalPages: 5 });
    expect(screen.getByRole('button', { name: 'Go to page 1' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Go to page 5' })).toBeInTheDocument();
  });

  it('marks current page with aria-current="page"', () => {
    setup({ page: 2, totalPages: 5 });
    expect(screen.getByRole('button', { name: 'Go to page 2' })).toHaveAttribute(
      'aria-current',
      'page',
    );
  });

  it('prev button is disabled on first page', () => {
    setup({ page: 1, totalPages: 5 });
    expect(screen.getByRole('button', { name: 'Go to previous page' })).toBeDisabled();
  });

  it('next button is disabled on last page', () => {
    setup({ page: 5, totalPages: 5 });
    expect(screen.getByRole('button', { name: 'Go to next page' })).toBeDisabled();
  });

  it('calls onChange with page - 1 when prev clicked', async () => {
    const onChange = vi.fn();
    setup({ page: 3, totalPages: 5, onChange });
    await userEvent.click(screen.getByRole('button', { name: 'Go to previous page' }));
    expect(onChange).toHaveBeenCalledWith(2);
  });

  it('calls onChange with page + 1 when next clicked', async () => {
    const onChange = vi.fn();
    setup({ page: 3, totalPages: 5, onChange });
    await userEvent.click(screen.getByRole('button', { name: 'Go to next page' }));
    expect(onChange).toHaveBeenCalledWith(4);
  });

  it('calls onChange with correct page when a page button is clicked', async () => {
    const onChange = vi.fn();
    // page=3 with siblingCount=1 shows pages 1,2,3,4,5
    setup({ page: 3, totalPages: 5, onChange });
    await userEvent.click(screen.getByRole('button', { name: 'Go to page 5' }));
    expect(onChange).toHaveBeenCalledWith(5);
  });

  it('shows ellipsis when pages are truncated', () => {
    setup({ page: 5, totalPages: 10 });
    const ellipses = screen.getAllByText('…');
    expect(ellipses.length).toBeGreaterThan(0);
  });

  it('renders with custom aria-label', () => {
    setup({ 'aria-label': 'Search results pagination' });
    expect(
      screen.getByRole('navigation', { name: 'Search results pagination' }),
    ).toBeInTheDocument();
  });

  it('has no a11y violations', async () => {
    const { container } = setup({ page: 3, totalPages: 5 });
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
