import { Listing, SearchPayload } from "../../types/listing";
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
    }),
    getAllListings: builder.query<PaginatedResponse<Listing>, SearchPayload>({
      query: (body) => {
        // Go through each key in the body object and remove the null values
        return {
          url: `/listings?${queryString.stringify(body)}`,
          method: "GET",
        };
      },
    }),
    // getListingById using rtk query method
    getListingById: builder.query<Listing, string>({
      query: (id) => ({
        url: `/listings/${id}`,
        method: "GET",
      }),
    }),
    getListingByTitle: builder.query({
      query: (title) => ({
        url: `/listings?keyword=${title}`,
        method: "GET",
      }),
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
} = listingsApi;
