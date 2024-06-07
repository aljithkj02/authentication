import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
}

export const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        setIsLoading: (state, action) => {
            state.isLoading = action.payload;
        }
    }
})

export default globalSlice.reducer;
export const {setIsLoading} = globalSlice.actions;