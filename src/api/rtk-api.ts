import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { UploadResponse } from "../types/common";

const apiUrl = import.meta.env.VITE_API_URL;

export const api = createApi({
  tagTypes: [],
  baseQuery: fetchBaseQuery({
    baseUrl: `${apiUrl}/`,

    prepareHeaders: (headers, { getState, endpoint }) => {
      // Add the token to the headers from local storage
      const token = localStorage.getItem("token");

      const UPLOAD_ENDPOINT = "upload";
      // Remove setting the "Content-Type" header for the upload endpoint
      if (UPLOAD_ENDPOINT.includes(endpoint)) {
        headers.delete("Content-Type");
      } else {
        headers.set("Content-Type", "application/json");
      }

      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: (builder) => ({
    upload: builder.mutation<UploadResponse, FormData>({
      query: (formData) => {
        return {
          url: `upload`,
          method: "POST",
          body: formData,
        };
      },
    }),
  }),
  reducerPath: "api",
});

export const { useUploadMutation } = api;
