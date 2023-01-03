import ProductsEntity from "../../../../domain/products/entity/products.entity";
import ProductsRepositoryInterface from "../../../../domain/products/repositories/products.repository.interface";

import productsModel from '../../model/products.model';


export default class ProductsRespoitory implements ProductsRepositoryInterface {
 
  async findAll(): Promise<ProductsEntity[]> {

    const products = await productsModel.find({
      stock: { $gte: 10 },
      discountPercentage: { $lte: 15 }
    })

    return products;  
  }


  async update(id: number, dataUpdate: ProductsEntity): Promise<ProductsEntity> {
    
    await productsModel.updateOne({ productId: id }, dataUpdate).exec()

    const productUpdated = await this.findById(id)

    return productUpdated;

  }

  async create({ 
    productId, 
    title, 
    description,
    price,
    discountPercentage,
    rating,
    stock,
    brand,
    category,
    thumbnail,
    images,
    isFavorite 
  }: ProductsEntity): Promise<ProductsEntity> {
    
      const product = await productsModel.create({
        productId,
        title,
        description,
        price,
        discountPercentage,
        rating,
        stock,
        brand,
        category,
        thumbnail,
        images,
        isFavorite,
      });

      return product;
  }

  async findById(id: number): Promise<ProductsEntity | undefined> {
      const findProduct = await productsModel.findOne({ productId: id });

      return findProduct;
  }
  
}