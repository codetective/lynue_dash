import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import AuthReducer from "./features/AuthSlice";
import NotificationReducer from "./features/NotificationSlice";

export const rootReducers = combineReducers({
  notifications: NotificationReducer,
  auth: AuthReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
  // blacklist: ["notifications"],
};

const persistedReducers = persistReducer(persistConfig, rootReducers);

export const store = configureStore({
  reducer: persistedReducers,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
