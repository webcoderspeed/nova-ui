export const PAGINATION_TEST_IDS = {
  root: 'pagination',
  prevButton: 'pagination-prev',
  nextButton: 'pagination-next',
  pageButton: (page: number) => `pagination-page-${page}`,
  ellipsis: 'pagination-ellipsis',
} as const;
