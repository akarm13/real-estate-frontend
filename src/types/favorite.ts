import { User } from "./auth";
import { Listing } from "./listing";

export type Favorite = {
  action: "favorited" | "unfavorited";
  favorite: {
    listing: Listing;
    user: User;
  };
  createdAt: string;
  updatedAt: string;
};
