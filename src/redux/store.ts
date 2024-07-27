import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {  baseApiSlice } from "../axios/baseApiConfig";
import trendingReducer from '../components/trendingMovies/redux/trending.slice'



const combinedReducers = combineReducers({
    trending : trendingReducer,
    [baseApiSlice.reducerPath]: baseApiSlice.reducer,
})

export const store = configureStore({
    reducer: combinedReducers,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(baseApiSlice.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch