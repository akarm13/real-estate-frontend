// /favorites/644dc7595ff5e711fa379ddfimport

import { Favorite } from "../../types/favorite";
import { api } from "../rtk-api";

export const favoritesApi = api.injectEndpoints({
  endpoints: (builder) => ({
    toggleFavorite: builder.mutation<Favorite, string>({
      query: (id) => {
        return {
          url: `/favorites/${id}`,
          method: "POST",
        };
      },
    }),
  }),
});

export const { useToggleFavoriteMutation } = favoritesApi;
