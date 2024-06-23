import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/couter/coutnerSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    }
})