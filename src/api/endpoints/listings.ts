import { Listing } from "../../types/property";
import { api } from "../rtk-api";
export type SearchPayload = {
  keyword?: string;
  buildingType?: BuildingType[];
  type?: ListingType[];
  minPrice?: number;
  maxPrice?: number;
  minBedrooms?: number;
  maxBedrooms?: number;
  minBathrooms?: number;
  maxBathrooms?: number;
  minHomeSize?: number;
  maxHomeSize?: number;
  pageNumber?: number;
  pageSize?: number;
  longitude?: number;
  latitude?: number;
  radius?: number;
};

export type ListingStatus = 'featured' | 'normal';

export type ListingType = 'sale' | 'rent';

export type BuildingType = 'house' | 'apartment' | 'villa' | 'land';

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