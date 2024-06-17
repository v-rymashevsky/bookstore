import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { requestBooks, requestSearchResults } from '../services/book'

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

// interface SearchParams {
//   search: string | undefined
//   page?: number
// }

const initialState: BooksState = {
  list: [],
  isLoading: false,
  error: null
}

export const fetchBooks = createAsyncThunk<Book[], void>(
  'books/fetchBooks',
  async (_, { rejectWithValue }) => {
    try {
      return await requestBooks()
    } catch (error) {
      return rejectWithValue(
        typeof error === 'object' && error !== null && 'message' in error && typeof error.message === 'string'
          ? error.message
          : 'Failed to fetch books'
      )
    }
  })

export const fetchSearchResults = createAsyncThunk<Book[], string | undefined >(
  'books/fetchSearchResults',
  async (search, { rejectWithValue }) => {
    try {
      return await requestSearchResults(search)
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
      .addCase(fetchSearchResults.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(fetchSearchResults.fulfilled, (state, action) => {
        state.isLoading = false
        state.list = action.payload.map((book) => ({ ...book, isFavorite: false }))
      })
      .addCase(fetchSearchResults.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload ? action.payload.toString() : 'Unknown error'
      })
  }
})

export const booksReducer = booksSlice.reducer
