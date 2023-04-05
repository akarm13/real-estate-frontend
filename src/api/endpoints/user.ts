import { User, userIdRequest } from "../../types/listing";
import { api } from "../rtk-api";


export const userApi = api.injectEndpoints({
    endpoints: (builder) => ({

        getUser: builder.query<User, userIdRequest>({
            query: (id) => ({
                url: `/users/${id}`,
                method: "GET",
            }),
        })

    }),
});

export const { useGetUserQuery } = userApi;
