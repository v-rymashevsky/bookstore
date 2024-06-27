export interface BookDetailsItem {
    id: string
    error: string
    title: string
    subtitle: string
    authors: string
    publisher: string
    language: string
    isbn10: string
    isbn13: string
    pages: string
    year: string
    rating: string
    desc: string
    price: string
    image: string
    url: string
    pdf: {[key: string]: string}
    quantity: number
}
