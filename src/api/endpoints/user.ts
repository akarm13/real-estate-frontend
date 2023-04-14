import { RootState } from "../../store/store";
import { User } from "../../types/listing";
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
  }),
});

export const { useLazyGetMeQuery, useGetMeQuery } = userApi;

// Where the endPoint name is "getMe"
export const selectIsGetMeLoading = (state: RootState) => {
  if (state.api.queries) {
    return Object.values((state.api as any).queries).some(
      (query: any) =>
        query.endpointName === "getMe" && query.status === "pending"
    );
  }
};
