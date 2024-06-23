import { createSlice } from '@reduxjs/toolkit'

interface ShoppingCartState {
  counter?: number
    items?: []
}
const initialState: ShoppingCartState = {
  items: [],
  counter: JSON.parse(localStorage.getItem('shopping-cart') || '[]').length
}

const shoppingCartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCount (state, action) {
      state.counter = action.payload
    }
  }
})

export const { setCount } = shoppingCartSlice.actions

export const shoppingCartReducer = shoppingCartSlice.reducer
