import { BookDetailsItem } from './book-details-item'

export interface BookDetailsState {
    content: BookDetailsItem | null
    isLoading: boolean
    error: string | null
  }
