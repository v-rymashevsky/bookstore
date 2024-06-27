import { BookDetails } from './book-details'

export interface ShoppingCartButtonProps {
    book: BookDetails
    onAddToCart: (book: BookDetails) => void
  }
