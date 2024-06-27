import { BookDetailsItem } from './book-details-item'

export interface ShoppingCartButtonProps {
    book: BookDetailsItem
    onAddToCart: (book: BookDetailsItem) => void
  }
