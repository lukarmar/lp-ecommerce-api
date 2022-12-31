import ProductsEntity from "../../../../domain/products/entity/products.entity";
import ProductsRepositoryInterface from "../../../../domain/products/repositories/products.repository.interface";


export default class ProductsRepositoryFakeImplementation implements ProductsRepositoryInterface {

    private products: ProductsEntity[] = [];

    async create(entity: ProductsEntity): Promise<ProductsEntity> {
        await this.products.push(entity)

        return entity
    }

    async update(id: number, dataUpdate: ProductsEntity): Promise<ProductsEntity> {
      
      const productIndex = this.products.findIndex(product => product.productId === id);

      const product = this.products[productIndex];

      const productUpdated = Object.assign(product, dataUpdate);

      this.products[productIndex] = productUpdated;

      return productUpdated

    }


    async findAll(): Promise<ProductsEntity[]> {

      const findAllProducts = this.products;

      return findAllProducts;
    }

    async findById(id: number): Promise<ProductsEntity | undefined> {
        const findProduct = await this.products.find(product => product.productId === id);

        return findProduct
    }

}