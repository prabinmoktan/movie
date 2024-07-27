/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";


 
const initialState = {
    data: [], //initial state for data of trending movies
    loading: false,
    error: null, //initial error state 
}

const trendingSlice = createSlice({
    name: 'trendig',
    initialState, 
    reducers: {},

    extraReducers: (_builder) => {},
})

export default trendingSlice.reducer;