import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

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

const initialState: BooksState = {
  list: [],
  isLoading: false,
  error: null
}

export const fetchBooks = createAsyncThunk<Book[], void>(
  'books/fetchBooks',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('https://api.itbook.store/1.0/new')
      if (!response.ok) {
        throw new Error('Failed to fetch books')
      }
      const data = await response.json()
      return data.books as Book[]
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
        state.list = action.payload.map((book) => ({ ...book }))
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload ? action.payload.toString() : 'Unknown error'
      })
  }
})

export const booksReducer = booksSlice.reducer
