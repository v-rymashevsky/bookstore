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

export interface SearchParams {
  search: string | undefined
  page: string | undefined
}

export interface SearchResults {
  total: string
  books: Book[]
}

interface BooksState {
  list: Book[]
  isLoading: boolean
  error: string | null
  pagesCount: number

}

const initialState: BooksState = {
  list: [] as Book[],
  isLoading: false,
  error: null,
  pagesCount: 0

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

export const fetchSearchResults = createAsyncThunk<SearchResults, SearchParams >(
  'books/fetchSearchResults',
  async ({ search, page }, { rejectWithValue }) => {
    try {
      return await requestSearchResults({ search, page })
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
        state.list = action.payload
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
        const totalNumber = Number(action.payload.total)
        state.isLoading = false
        state.list = action.payload.books.map((book) => ({ ...book, isFavorite: false }))
        state.pagesCount = Math.ceil(totalNumber > 1000 ? 100 : totalNumber / 10)
      })
      .addCase(fetchSearchResults.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload ? action.payload.toString() : 'Unknown error'
      })
  }
})

export const booksReducer = booksSlice.reducer
