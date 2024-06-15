import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { booksReducer } from './books-slice'

export const store = configureStore({
  reducer: {
    books: booksReducer
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
