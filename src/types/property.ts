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
