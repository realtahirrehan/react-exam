import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Product } from '../../pages/Home'

interface ProductState {
    items: Product[]
}

const initialState: ProductState = {
    items: [],
}

const productSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<Product>) => {
            state.items.push(action.payload);
        },
        removeFromCart: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
        
    },
})

export const { addToCart, removeFromCart } = productSlice.actions
export default productSlice.reducer
