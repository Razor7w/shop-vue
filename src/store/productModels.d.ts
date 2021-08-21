export interface Category {
  id: number
  name: string
  order: number
}

export interface Attributes {
  id: number
  name: string
  icon: string
}

export interface Product {
  id: number
  attributes: Attributes[]
  category: Category
  name: string
  code: string
  stock: number
  abstract: string
  description: string
  price: number
  photo: string
}

export interface ProductPage {
  page:number
  product?: Product
}
