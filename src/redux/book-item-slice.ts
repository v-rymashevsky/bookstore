import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export interface BookItem {
    error: string
    title: string
    subtitle: string
    authors: string
    publisher: string
    isbn10: string
    isbn13: string
    pages: string
    year: string
    rating: string
    desc: string
    price: string
    image: string
    url: string
    pdf: {
        [key: string]: string
    }
}

interface BookItemState {
    content: BookItem | null
    isLoading: boolean
    error: string | null
  }
const initialState: BookItemState = {
  content: null,
  isLoading: false,
  error: null
}

export const fetchBook = createAsyncThunk<BookItem, string>(
  'bookItem/fetchBook',
  async (isbn13: string, { rejectWithValue }) => {
    try {
      const response = await fetch(`https://api.itbook.store/1.0/books/${isbn13}`)
      if (!response.ok) {
        throw new Error('Failed to fetch books')
      }
      const data = await response.json()
      return data
    } catch (error) {
      return rejectWithValue(
        typeof error === 'object' && error !== null && 'message' in error && typeof error.message === 'string'
          ? error.message
          : 'Failed to fetch books'
      )
    }
  })

export const bookItemSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBook.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchBook.fulfilled, (state, action) => {
        state.isLoading = false
        state.content = action.payload
      })
      .addCase(fetchBook.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload ? action.payload.toString() : 'Unknown error'
      })
  }
})

export const bookItemReducer = bookItemSlice.reducer
