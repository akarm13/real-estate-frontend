import { Listing, SearchPayload } from "../../types/listing";
import { api } from "../rtk-api";

export const listingsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllListings: builder.query<Listing, SearchPayload>({
      query: (body) => ({
        url: "/listings",
        method: "GET",
        body,
      }),
    }),
  }),
});

export const { useGetAllListingsQuery } = listingsApi;
