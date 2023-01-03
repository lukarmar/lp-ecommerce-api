import { inject, injectable } from 'tsyringe'
import ProductsRepositoryInterface from '../../../../domain/products/repositories/products.repository.interface'
import { SaveDataProductDTO } from '../../../../domain/products/DTOs/SaveDataProductDTO'
import AppError from '../../../@shared/AppError/AppError'


@injectable()
export default class UpdateProductsUseCase {
  
  constructor(
    @inject('ProductsRepository')
    private productsRepository: ProductsRepositoryInterface
  ) {}

  async execute(productId: number, dataProduct: SaveDataProductDTO): Promise<SaveDataProductDTO> {

    const productExists = await this.productsRepository.findById(productId)

    if(!productExists) {
        throw new AppError("Product not exists")
    }
  
    const productUpdate = await this.productsRepository.update(
      productId,
      dataProduct
    )

    return productUpdate
  }

}