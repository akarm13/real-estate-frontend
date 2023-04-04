import { Listing, SearchPayload } from "../../types/listing";
import { api } from "../rtk-api";

import { PaginatedResponse } from "../../types/common";

export const listingsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllListings: builder.query<PaginatedResponse<Listing>, SearchPayload>({
      query: (body) => ({
        url: "/listings",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllListingsQuery } = listingsApi;
