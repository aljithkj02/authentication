import { configureStore } from "@reduxjs/toolkit";
import globalReducer from './slices/global'

export const appStore = configureStore({
    reducer: {
        global: globalReducer
    }
})