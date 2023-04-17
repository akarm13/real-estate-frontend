import { get } from "immer/dist/internal";
import { User, userIdRequest } from "../../types/listing";
import { api } from "../rtk-api";


export const userApi = api.injectEndpoints({
    endpoints: (builder) => ({

        getUser: builder.query<User, userIdRequest>({
            query: (id) => ({
                url: `/users/${id}`,
                method: "GET",
            }),
        }),
        getAgent: builder.query({
         query: () => ({
          url:"/users",
          method:"GET"
         })
            
          
        })

    }),
});

export const { useGetUserQuery,useGetAgentQuery } = userApi;
