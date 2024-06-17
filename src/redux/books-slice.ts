import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { requestBooks } from '../services/book'

export interface Book {
  title: string
  subtitle: string
  isbn13: string
  price: string
  image: string
  url: string
}

interface BooksState {
  list: Book[]
  isLoading: boolean
  error: string | null
}

interface FetchBookParams {
  search: string
  page: number
}
const initialState: BooksState = {
  list: [],
  isLoading: false,
  error: null
}

export const fetchBooks = createAsyncThunk<Book[], FetchBookParams>(
  'books/fetchBooks',
  async (params: FetchBookParams, { rejectWithValue }) => {
    try {
      return await requestBooks(params)
    } catch (error) {
      return rejectWithValue(
        typeof error === 'object' && error !== null && 'message' in error && typeof error.message === 'string'
          ? error.message
          : 'Failed to fetch books'
      )
    }
  })

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.isLoading = false
        state.list = action.payload.map((book) => ({ ...book, isFavorite: false }))
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload ? action.payload.toString() : 'Unknown error'
      })
  }
})

export const booksReducer = booksSlice.reducer
