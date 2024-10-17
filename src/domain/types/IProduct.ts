export interface IProductRepository {
  getProducts(): Promise<IProductResponse>
}

interface IProductDetails {
  name: string;
  description: string;
}

export interface IProduct {
  code: string
  name: string
  available: boolean
  visible: boolean
  details: IProductDetails
  fullPriceInCents: string
  salePriceInCents: string
  rating: number
  image: string
  stockAvailable: boolean
  active?: boolean
}

export interface IProductResponse {
  total: number
  pageSize: number
  totalPages: number
  products: IProduct[]
}

export interface IProductService {
  getProducts(): Promise<IProductResponse>
}