import { inject, injectable } from 'tsyringe'
import ProductsRepositoryInterface from '../../../../domain/products/repositories/products.repository.interface'
import { ProductsDTO } from '../../../../domain/products/DTOs/Products.DTO'
import { SaveDataProductDTO } from '../../../../domain/products/DTOs/SaveDataProductDTO'


@injectable()
export default class CreateOrUpdateProductsUseCase {
  
  constructor(
    @inject('ProductsRepository')
    private productsRepository: ProductsRepositoryInterface
  ) {}

  async execute(dataProduct: ProductsDTO): Promise<SaveDataProductDTO> {

    const productExists = await this.productsRepository.findById(dataProduct.id)

    if(productExists) {
      const productUpdated = await this.productsRepository.update(productExists.productId, {
        ...dataProduct,
        productId: productExists.productId,
        isFavorite: productExists.isFavorite
      });
      return productUpdated
    }
    
    const newProduct: SaveDataProductDTO = {
      ...dataProduct,
      productId: dataProduct.id,
      isFavorite: false
    }

    const product = await this.productsRepository.create(newProduct)

    return product
  }

}