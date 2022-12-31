import { container } from 'tsyringe'

import ProductsRepositoryInterface  from '../../domain/products/repositories/products.repository.interface'
import ProductsRepository from '../products/repositories/implementations/products.repository'


container.registerSingleton<ProductsRepositoryInterface>(
  'ProductsRepository',
  ProductsRepository
)


