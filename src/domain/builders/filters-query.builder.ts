export class FiltersQueryBuilder {
  static build<T>(filters?: T): string {
    if (!filters) return "";

    const filtersQuery = new URLSearchParams();

    Object.entries(filters).forEach(([key, value]) => {
      if (value !== undefined) {
        filtersQuery.append(key, String(value));
      }
    });

    return filtersQuery.toString() ? `&${filtersQuery.toString()}` : "";
  }
}
