import {
  LoginPayload,
  RegisterPayload,
  TokenResponse,
} from "../../types/property";
import { api } from "../rtk-api";

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation<TokenResponse, RegisterPayload>({
      query: (body) => ({
        url: "auth/register",
        method: "POST",
        body,
      }),
    }),
    login: builder.mutation<TokenResponse, LoginPayload>({
      query: (body) => ({
        url: "auth/login",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useRegisterMutation } = authApi;
