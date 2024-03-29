import { RootState } from "../../store/store";
import { AgentSearchParams } from "../../types/agent";
import { User } from "../../types/auth";
import { PaginatedResponse } from "../../types/common";
import { ChangePasswordFormData, EditUserFormData } from "../../types/users";
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

    editMe: builder.mutation<User, EditUserFormData>({
      query: (body) => ({
        url: `/users/me`,
        method: "PATCH",
        body,
      }),
    }),

    getUserById: builder.query<User, string>({
      query: (id) => ({
        url: `/users/${id}`,
        method: "GET",
      }),
    }),

    changePassword: builder.mutation<User, ChangePasswordFormData>({
      query: (body) => ({
        url: `/users/me/change-password`,
        method: "PATCH",
        body,
      }),
    }),
    getAgents: builder.query<PaginatedResponse<User>, AgentSearchParams>({
      query: ({ search, verificationStatus }) => {
        const params: AgentSearchParams = {};

        if (search) {
          params.search = search;
        }

        if (verificationStatus) {
          params.verificationStatus = verificationStatus;
        }
        return {
          url: "/users/agents",
          method: "GET",
          params,
        };
      },
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

export const {
  useLazyGetMeQuery,
  useGetMeQuery,
  useGetAgentsQuery,
  useEditMeMutation,
  useChangePasswordMutation,
  useLazyGetUserByIdQuery,
} = userApi;
