import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { requestBookDetails } from '../services/book'
import { BookDetails } from '../interfaces/book-details'
import { BookDetailsState } from '../interfaces/book-details-state'

const initialState: BookDetailsState = {
  content: null,
  isLoading: false,
  error: null
}

export const fetchBook = createAsyncThunk<BookDetails, string>(
  'bookItem/fetchBook',
  async (id: string, { rejectWithValue }) => {
    try {
      return await requestBookDetails(id)
    } catch (error) {
      return rejectWithValue(
        typeof error === 'object' && error !== null && 'message' in error && typeof error.message === 'string'
          ? error.message
          : 'Failed to fetch books'
      )
    }
  })

export const bookItemSlice = createSlice({
  name: 'book',
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
        state.error = action.payload.error
      })
      .addCase(fetchBook.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload ? action.payload.toString() : 'Unknown error'
      })
  }
})

export const bookItemReducer = bookItemSlice.reducer
