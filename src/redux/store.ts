import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { baseApiSlice } from "../axios/baseApiConfig";
import trendingReducer from "../components/trendingMovies/redux/trending.slice";
import authReducer from "../auth/redux/auth.slice";
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
import storage from "redux-persist/lib/storage";

const combinedReducers = combineReducers({
  trending: trendingReducer,
  auth: authReducer,
  [baseApiSlice.reducerPath]: baseApiSlice.reducer,
});
const persistConfig = {
  key: "root",
  // whitelist: ["auth"],
  storage,
};

const persistedReducer = persistReducer(persistConfig, combinedReducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(baseApiSlice.middleware),
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
