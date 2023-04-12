import { Listing, ListingIdRequest, SearchPayload } from "../../types/listing";
import { api } from "../rtk-api";

import { PaginatedResponse } from "../../types/common";
import queryString from "query-string";

export const listingsApi = api.injectEndpoints({
  endpoints: (builder) => ({
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
    getListingById: builder.query<Listing, ListingIdRequest>({
      query: (id) => ({
        url: `/ listings / ${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllListingsQuery, useGetListingByIdQuery } = listingsApi;
