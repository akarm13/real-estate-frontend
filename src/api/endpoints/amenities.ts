import { Amenity } from "../../types/listing";
import { api } from "../rtk-api";

export const amenitiesApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllAmenities: builder.query<Amenity[], void>({
      query: () => {
        return {
          url: `/amenities`,
          method: "GET",
        };
      },
    }),
  }),
});

export const { useGetAllAmenitiesQuery } = amenitiesApi;
