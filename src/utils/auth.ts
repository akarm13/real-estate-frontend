import jwtDecode from "jwt-decode";
import { Token } from "../types/auth";

export const isValidToken = (token: string | null) => {
  if (!token) {
    return false;
  }

  const decodedToken = jwtDecode<Token>(token);

  const currentTime = Date.now().valueOf() / 1000;

  if (decodedToken.exp < currentTime) {
    return false;
  }

  return decodedToken;
};
