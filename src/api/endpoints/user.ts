import { get } from "immer/dist/internal";
import { User, userIdRequest } from "../../types/listing";
import { api } from "../rtk-api";
import { PaginatedResponse } from "../../types/common";

export const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query<User, userIdRequest>({
      query: (id) => ({
        url: `/users/${id}`,
        method: "GET",
      }),
    }),
    getAgent: builder.query<PaginatedResponse<User>, void>({
      query: () => ({
        url: "/users/agents",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetUserQuery, useGetAgentQuery } = userApi;
