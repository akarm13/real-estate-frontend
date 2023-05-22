import {
  EditListingPayload,
  Listing,
  SearchPayload,
} from "../../types/listing";
import { api } from "../rtk-api";

import { PaginatedResponse } from "../../types/common";
import queryString from "query-string";
import { AddListingPayload } from "../../types/listing";

export const listingsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    addListing: builder.mutation<Listing, AddListingPayload>({
      query: (body) => ({
        url: "/listings",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Listings"],
    }),
    updateListing: builder.mutation<Listing, EditListingPayload>({
      query: ({ id, ...body }) => ({
        url: `/listings/${id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["Listings"],
    }),

    deleteListing: builder.mutation<void, string>({
      query: (id) => ({
        url: `/listings/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Listings"],
    }),

    getAllListings: builder.query<PaginatedResponse<Listing>, SearchPayload>({
      query: (body) => {
        // Go through each key in the body object and remove the null values
        return {
          url: `/listings?${queryString.stringify(body)}`,
          method: "GET",
        };
      },
      providesTags: ["Listings"],
    }),
    // getListingById using rtk query method
    getListingById: builder.query<Listing, string>({
      query: (id) => ({
        url: `/listings/${id}`,
        method: "GET",
      }),
      providesTags: ["Listings"],
    }),
    getListingByTitle: builder.query({
      query: (title) => ({
        url: `/listings?keyword=${title}`,
        method: "GET",
      }),
      providesTags: ["Listings"],
    }),

    getListingsByAgent: builder.query<
      PaginatedResponse<Listing>,
      {
        id: string;
        pageSize: number;
        pageNumber: number;
        orderBy: string;
      }
    >({
      query: (payload) => ({
        url: `/listings/agents/${payload.id}?pageSize=${payload.pageSize}&pageNumber=${payload.pageNumber}&orderBy=${payload.orderBy}`,
        method: "GET",
      }),
      providesTags: ["Listings"],
    }),

    getFavoritedListings: builder.query<
      PaginatedResponse<Listing>,
      {
        pageSize: number;
        pageNumber: number;
        orderBy: string;
      }
    >({
      query: (payload) => ({
        url: `/favorites/?${queryString.stringify(payload)}`,
        method: "GET",
      }),
      providesTags: ["Listings"],
    }),
  }),
});

export const {
  useGetAllListingsQuery,
  useGetListingByIdQuery,
  useGetListingByTitleQuery,
  useAddListingMutation,
  useLazyGetListingsByAgentQuery,
  useLazyGetFavoritedListingsQuery,
  useUpdateListingMutation,
  useDeleteListingMutation,
  useGetListingsByAgentQuery,
} = listingsApi;
