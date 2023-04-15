export type Role = "admin" | "agent" | "user";

export type Token = {
  email: string;
  exp: number;
  iat: number;
  role: Role;
};
export type User = {
  _id: string;
  fullName: string;
  email: string;
  phone: string;
  avatar: string;
  isVerified: boolean;
  role: Role;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
};
