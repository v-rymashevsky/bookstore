import { createSlice } from '@reduxjs/toolkit'
import { BookDetails } from '../interfaces/book-details'
import { ShoppingCartState } from '../interfaces/shopping-cart-state'

function calculateTotal (items: BookDetails[]) {
  const total = items
    .map((book) => ({
      ...book,
      price: book.price.substring(1)
    }))
    .reduce((accumulator, book) => accumulator + Number(book.price) * Number(book.quantity), 0)
  return total.toFixed(2)
}

const initialState: ShoppingCartState = {
  items: JSON.parse(localStorage.getItem('shopping-cart') || '[]'),
  counter: JSON.parse(localStorage.getItem('shopping-cart') || '[]').length,
  total: Number(calculateTotal(JSON.parse(localStorage.getItem('shopping-cart') || '[]')))
}

const shoppingCartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    updateItems (state, action) {
      state.items = action.payload
      state.total = Number(calculateTotal(action.payload))
      state.counter = action.payload.length
    }
  }
})

export const { updateItems } = shoppingCartSlice.actions

export const shoppingCartReducer = shoppingCartSlice.reducer
