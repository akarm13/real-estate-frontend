import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { User } from "../../types/auth";

type AuthState = {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoadingUser: boolean;
};

const initialState: AuthState = {
  user: null,
  token: null,
  isAuthenticated: false,
  isLoadingUser: true,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User>) {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    setToken(state, action: PayloadAction<string>) {
      state.token = action.payload;
    },
    logout(state) {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
    },

    setIsLoadingUser(state, action: PayloadAction<boolean>) {
      state.isLoadingUser = action.payload;
    },
  },
});

export const selectAuth = (state: RootState) => state.auth;
export const selectIsAgent = (state: RootState) =>
  state.auth.user?.role === "agent";

export const selectIsAuthenticated = (state: RootState) =>
  state.auth.isAuthenticated &&
  state.auth.token !== null &&
  state.auth.user !== null;

export const authSliceReducer = authSlice.reducer;
export const { setUser, setToken, setIsLoadingUser, logout } =
  authSlice.actions;
