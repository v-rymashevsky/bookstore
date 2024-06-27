import { BookDetails } from './book-details'

export interface BookDetailsState {
    content: BookDetails | null
    isLoading: boolean
    error: string | null
  }
