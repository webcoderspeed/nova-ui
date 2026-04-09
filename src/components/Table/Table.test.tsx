import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { axe } from 'vitest-axe';
import { NovaTable } from './Table';
import { TABLE_TEST_IDS } from './Table.testIds';

function renderTable(props = {}) {
  return render(
    <NovaTable {...props}>
      <NovaTable.Head>
        <NovaTable.Row>
          <NovaTable.HeaderCell>Name</NovaTable.HeaderCell>
          <NovaTable.HeaderCell>Email</NovaTable.HeaderCell>
        </NovaTable.Row>
      </NovaTable.Head>
      <NovaTable.Body>
        <NovaTable.Row>
          <NovaTable.Cell>John</NovaTable.Cell>
          <NovaTable.Cell>john@example.com</NovaTable.Cell>
        </NovaTable.Row>
        <NovaTable.Row>
          <NovaTable.Cell>Jane</NovaTable.Cell>
          <NovaTable.Cell>jane@example.com</NovaTable.Cell>
        </NovaTable.Row>
      </NovaTable.Body>
    </NovaTable>,
  );
}

describe('NovaTable', () => {
  it('renders semantic table structure', () => {
    const { container } = renderTable();
    expect(container.querySelector('table')).toBeInTheDocument();
    expect(container.querySelector('thead')).toBeInTheDocument();
    expect(container.querySelector('tbody')).toBeInTheDocument();
    expect(container.querySelectorAll('th')).toHaveLength(2);
    expect(container.querySelectorAll('td')).toHaveLength(4);
    expect(container.querySelectorAll('tr')).toHaveLength(3);
  });

  it('renders data-nova-test ids', () => {
    const { container } = renderTable();
    expect(
      container.querySelector(`[data-nova-test="${TABLE_TEST_IDS.root}"]`),
    ).toBeInTheDocument();
    expect(
      container.querySelector(`[data-nova-test="${TABLE_TEST_IDS.head}"]`),
    ).toBeInTheDocument();
    expect(
      container.querySelector(`[data-nova-test="${TABLE_TEST_IDS.body}"]`),
    ).toBeInTheDocument();
  });

  it('applies bordered variant', () => {
    const { container } = renderTable({ bordered: true });
    expect(container.querySelector(`[data-nova-test="${TABLE_TEST_IDS.root}"]`)).toHaveClass(
      'border',
    );
  });

  it('sets striped data attribute', () => {
    const { container } = renderTable({ striped: true });
    expect(container.querySelector(`[data-nova-test="${TABLE_TEST_IDS.root}"]`)).toHaveAttribute(
      'data-striped',
    );
  });

  it('accepts custom novaTestId', () => {
    const { container } = renderTable({ novaTestId: 'users-table' });
    expect(container.querySelector('[data-nova-test="users-table"]')).toBeInTheDocument();
  });

  it('has no a11y violations', async () => {
    const { container } = renderTable();
    expect(await axe(container)).toHaveNoViolations();
  });
});
