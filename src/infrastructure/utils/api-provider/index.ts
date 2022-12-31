import { api } from './api'
import { ProductsDTO } from '../../../domain/products/DTOs/Products.DTO'

export interface ProductsInterface {
  products: ProductsDTO[]
}

export const getRequestDataProducts = async (limit: number, skip: number):Promise<ProductsDTO[]> => {

  const { data: { products } } = await api.get<ProductsInterface>(`/products?limit=${limit}&skip=${skip}`)

  return products;  
}