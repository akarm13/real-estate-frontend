import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "../../types/listing";
import { RootState } from "../store";

type AuthState = {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
};

const initialState: AuthState = {
  user: null,
  token: null,
  isAuthenticated: false,
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
  },
});

export const selectAuth = (state: RootState) => state.auth;
export const selectIsAgent = (state: RootState) => state.auth.user?.isAgent;

export const authSliceReducer = authSlice.reducer;
export const { setUser, setToken } = authSlice.actions;
