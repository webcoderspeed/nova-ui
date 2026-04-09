import type { Matcher, MatcherOptions } from '@testing-library/react';
import { buildQueries, queryHelpers } from '@testing-library/react';

const queryAllByNovaTest = (container: HTMLElement, id: Matcher, options?: MatcherOptions) =>
  queryHelpers.queryAllByAttribute('data-nova-test', container, id, options);

const getMultipleError = (_c: Element | null, id: string) =>
  `Found multiple elements with [data-nova-test="${id}"]`;

const getMissingError = (_c: Element | null, id: string) =>
  `Unable to find element with [data-nova-test="${id}"]`;

const [queryByNovaTest, getAllByNovaTest, getByNovaTest, findAllByNovaTest, findByNovaTest] =
  buildQueries(queryAllByNovaTest, getMultipleError, getMissingError);

export { findAllByNovaTest, findByNovaTest, getAllByNovaTest, getByNovaTest, queryByNovaTest };
