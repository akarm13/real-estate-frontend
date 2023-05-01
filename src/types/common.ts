export type PaginatedResponse<T> = {
  data: T[];
  page: {
    size: number;
    total: number;
    current: number;
  };
};

export type UploadResponse = {
  urls: string[];
};

export type ErrorResponse = {
  status: number;
  data: {
    statusCode: number;
    message: string;
    error: string;
  };
};
