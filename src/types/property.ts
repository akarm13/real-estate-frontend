export type PropertyType = "rent" | "sale";
export type PropertyStatus = "featured" | "sold" | "new" | "normal";

export type Property = {
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