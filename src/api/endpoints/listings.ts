import { Listing, ListingIdRequest, SearchPayload } from "../../types/listing";
import { api } from "../rtk-api";

import { PaginatedResponse } from "../../types/common";

export const listingsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllListings: builder.query<PaginatedResponse<Listing>, SearchPayload>({
      query: () => ({
        url: "/listings",
        method: "GET",
      }),
    }),
    // getListingById using rtk query method
    getListingById: builder.query<Listing, ListingIdRequest>({
      query: (id) => ({
        url: `/listings/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllListingsQuery, useGetListingByIdQuery } = listingsApi;
