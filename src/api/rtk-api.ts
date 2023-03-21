import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiUrl = import.meta.env.VITE_API_URL;


export const api = createApi({
  tagTypes: [],
  baseQuery: fetchBaseQuery({
    baseUrl: `${apiUrl}/`,

    prepareHeaders: (headers, { getState }) => {
      // Add the token to the headers from local storage
      const token = localStorage.getItem("token");

      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }

      headers.set("Content-Type", "application/json");

      return headers;
    },
  }),
  endpoints: (builder) => ({}),
  reducerPath: "api",
});

export const { } = api;
