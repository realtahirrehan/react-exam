import { configureStore } from '@reduxjs/toolkit'
import productSlice from './product/productSlice'
export const store = configureStore({
    reducer: {
        cart: productSlice,
    },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
