import { createSlice } from "@reduxjs/toolkit";
const INITIAL_STATE = {
    url: {},
    genres: {}
};

const homeSlice = createSlice({
    name: "home",
    initialState: INITIAL_STATE,
    reducers: {
        getApiUrlConfiguration: (state, action) => {
            state.url = action.payload
        },
        getGenres: (state, action) => {
           state.genres = action.payload
        }
    }
})

export const homeReducer = homeSlice.reducer;
export const { getApiUrlConfiguration, getGenres } = homeSlice.actions;
export const homeSelector = (state) => state.homeReducer;