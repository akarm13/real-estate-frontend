export type Role = "admin" | "agent" | "user";

export type Token = {
  email: string;
  exp: number;
  iat: number;
  role: Role;
};
