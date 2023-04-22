export type PaginatedResponse<T> = {
  data: T[];
  page: {
    size: number;
    total: number;
    current: number;
  };
};
