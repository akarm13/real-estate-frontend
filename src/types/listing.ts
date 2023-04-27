import { User } from "./auth";

export type PropertyType = "rent" | "sale";
export type PropertyStatus = "featured" | "sold" | "new" | "normal";

export type Property = {
  id: string;
  price: number;
  title: string;
  address: string;
  type: PropertyType;
  bedrooms: number;
  bathrooms: number;
  area: number;
  status: PropertyStatus;
};

export type Question = {
  id: number;
  question: String;
  description: String;
  isShown: boolean;
};

export type LoginPayload = {
  email: string;
  password: string;
};

export type RegisterPayload = {
  fullName: string;
  email: string;
  agent: string;
  role: string;
  phone: string;
  password: string;
};

export type TokenResponse = {
  token: string;
  expiresInSeconds: number;
};

export type Listing = {
  _id: string;
  title: string;
  description: string;
  price: number;
  status: string;
  area: number;
  rooms: Rooms;
  images: string[];
  type: string;
  buildingType: string;
  geometry: Geometry;
  location: Location;
  amenities: Amenity[];
  owner: User;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
};

export type Amenity = {
  _id: string;
  title: string;
  __v: number;
};

export type Geometry = {
  coordinates: number[];
};

export type Location = {
  address: string;
  city: string;
};

export type Rooms = {
  bedrooms: number;
  bathrooms: number;
  other: number;
};

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
  boundingBox?: string;
};

export type ListingStatus = "featured" | "normal";

export type ListingType = "sale" | "rent";

export type BuildingType = "house" | "apartment" | "villa" | "land";

// {
//   "title": "A nice house for sale in Baxtiari Street",
//   "description": "A beautiful 2-bedroom, 2-bathroom house, with a total area of 200 square meters, is now available for sale in Baxtiari Street, Sulaymaniyah. This active listing features a spacious living area, modern kitchen, and comfortable bedrooms. The house is well-maintained and ready for its new owners. Its prime location in Aqary Street makes it a perfect choice for those looking for easy access to local amenities and a convenient lifestyle. this is a great opportunity to own a wonderful home in a sought-after location.",
//   "price": 50000,
//   "status": "normal",
//   "area": 150,
//   "rooms": {
//     "bedrooms": 1,
//     "bathrooms": 4,
//     "other": 3
//   },
//   "images": [
//     "https://cdn.pixabay.com/photo/2016/11/29/03/53/house-1867187_1280.jpg",
//     "https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_1280.jpg",
//     "https://cdn.pixabay.com/photo/2016/12/30/07/59/kitchen-1940175_1280.jpg",
//     "https://cdn.pixabay.com/photo/2014/10/05/22/40/family-home-475879_1280.jpg"
//   ],
//   "owner": "63f6ad230280db4e9387aca3",
//   "type": "sale",
//   "buildingType": "apartment",
//    "geometry": {
//       "coordinates": [35.497229, 45.425368]
//     },
//   "location": {
//     "address": "Aspswar Ranch",
//     "city": "Slemani"
//   },
//   "amenities": [

//     "63fa198cde46d05a3ccaefcb",
//     "63fa199ade46d05a3ccaefcf"
//   ]
// }

export type AddListingPayload = {
  title: string;
  description: string;
  price: number;
  status: string;
  area: number;
  rooms: Rooms;
  images: string[];
  type: string;
  buildingType: string;
  geometry: Geometry;
  location: Location;
  amenities: string[];
  owner: string;
};
