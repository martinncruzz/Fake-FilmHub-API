export function buildFiltersQuery(filters?: Record<string, any>): string {
  if (!filters) return '';

  const filtersQuery = new URLSearchParams();

  Object.entries(filters).forEach(([key, value]) => {
    if (value !== undefined && key !== 'page' && key !== 'limit') filtersQuery.append(key, String(value));
  });

  return filtersQuery.toString() ? `&${filtersQuery.toString()}` : '';
}
