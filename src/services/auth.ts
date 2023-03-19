// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { SignUser } from '../types/property'

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://real-estate-api-production.up.railway.app/auth/' }),
    endpoints: (builder) => ({
        createUser: builder.mutation({
            query: (user: SignUser) => ({
                url: "register",
                method: "POST",
                body: user
            })
        })
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useCreateUserMutation } = authApi