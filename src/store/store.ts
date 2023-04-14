import {
  Action,
  combineReducers,
  configureStore,
  ThunkAction,
} from "@reduxjs/toolkit";
import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";
import { setupListeners } from "@reduxjs/toolkit/query";
import { api } from "../api/rtk-api";
import { authSliceReducer } from "./slices/auth";

const reducers = combineReducers({
  [api.reducerPath]: api.reducer,
  auth: authSliceReducer,
});

const store: ToolkitStore = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof reducers>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

export default store;
