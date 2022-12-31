import { inject, injectable } from 'tsyringe'
import ProductsRepositoryInterface from '../../../../domain/products/repositories/products.repository.interface'
import { SaveDataProductDTO } from '../../../../domain/products/DTOs/SaveDataProductDTO'


@injectable()
export default class GetAllProductsUseCase {
  
  constructor(
    @inject('ProductsRepository')
    private productsRepository: ProductsRepositoryInterface
  ) {}

  async execute(): Promise<SaveDataProductDTO[]> {

    const products = await this.productsRepository.findAll()


    return products
  }

}