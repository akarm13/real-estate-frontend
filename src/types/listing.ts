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
  owner: User[];
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

export type User = {
  _id: string;
  fullName: string;
  email: string;
  phone: string;
  avatar: string;
  isVerified: boolean;
  role: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
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
  longitude?: number;
  latitude?: number;
  radius?: number;
};

export type ListingStatus = "featured" | "normal";

export type ListingType = "sale" | "rent";

export type BuildingType = "house" | "apartment" | "villa" | "land";



export type ListingIdRequest = {
  houseId: string | undefined;
}