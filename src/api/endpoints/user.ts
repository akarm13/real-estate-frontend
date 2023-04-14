import { User, userIdRequest } from "../../types/listing";
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
