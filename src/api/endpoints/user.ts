import { RootState } from "../../store/store";
import { User } from "../../types/auth";
import { PaginatedResponse } from "../../types/common";
import { api } from "../rtk-api";

export const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getMe: builder.query<User, string>({
      query: (token) => ({
        url: `/users/me`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
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

// Where the endPoint name is "getMe"
export const selectIsGetMeLoading = (state: RootState) => {
  if (state.api.queries) {
    return Object.values((state.api as any).queries).some(
      (query: any) =>
        query.endpointName === "getMe" && query.status === "pending"
    );
  }
};

export const { useLazyGetMeQuery, useGetMeQuery, useGetAgentQuery } = userApi;
