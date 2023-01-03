import { ProductsDTO } from '../../../../domain/products/DTOs/Products.DTO';
import ProductsRepositoryFakeImplementation from '../../repositories/fake-implementations/catalog.repository.fakeImplementation';
import UpdateProductsUseCase from './UpdateProductsUseCase';
import CreateOrUpdateProductsUseCase from '../createOrUpdateProducts/CreateOrUpdateProductsUseCase';

import AppError from '../../../@shared/AppError/AppError';


let productsRepositoryFakeImplementation: ProductsRepositoryFakeImplementation
let updateProductsUseCase: UpdateProductsUseCase;
let createOrUpdateProductsUseCase: CreateOrUpdateProductsUseCase


describe("Update Product", () => {

  beforeEach(() => {

    productsRepositoryFakeImplementation = new ProductsRepositoryFakeImplementation();
    updateProductsUseCase = new UpdateProductsUseCase(productsRepositoryFakeImplementation);
    createOrUpdateProductsUseCase = new CreateOrUpdateProductsUseCase(productsRepositoryFakeImplementation)
  })

  it("should be able to update one product", async () => {
    
    const dataProduct: ProductsDTO = {
      id: 36,
      title: "Sleeve Shirt Womens",
      description: "Cotton Solid Color Professional Wear Sleeve Shirt Womens Work Blouses Wholesale Clothing Casual Plain Custom Top OEM Customized",
      price: 90,
      discountPercentage: 10,
      rating: 4.26,
      stock: 39,
      brand: "Professional Wear",
      category: "tops",
      thumbnail: "https://i.dummyjson.com/data/products/36/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/36/1.jpg",
        "https://i.dummyjson.com/data/products/36/2.webp",
        "https://i.dummyjson.com/data/products/36/3.webp",
        "https://i.dummyjson.com/data/products/36/4.jpg",
        "https://i.dummyjson.com/data/products/36/thumbnail.jpg"
      ],
    }

    const dataUpdate: any = { price: 10 }
    
    await createOrUpdateProductsUseCase.execute(dataProduct);
    const updatedProduct = await updateProductsUseCase.execute(dataProduct.id, dataUpdate)
    
    expect(updatedProduct).toHaveProperty(["price"], dataUpdate.price);
  });

  it("should be able to return error for not finding a product", async () => {
    
    const dataProduct: ProductsDTO = {
      id: 36,
      title: "Sleeve Shirt Womens",
      description: "Cotton Solid Color Professional Wear Sleeve Shirt Womens Work Blouses Wholesale Clothing Casual Plain Custom Top OEM Customized",
      price: 90,
      discountPercentage: 10,
      rating: 4.26,
      stock: 39,
      brand: "Professional Wear",
      category: "tops",
      thumbnail: "https://i.dummyjson.com/data/products/36/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/36/1.jpg",
        "https://i.dummyjson.com/data/products/36/2.webp",
        "https://i.dummyjson.com/data/products/36/3.webp",
        "https://i.dummyjson.com/data/products/36/4.jpg",
        "https://i.dummyjson.com/data/products/36/thumbnail.jpg"
      ],
    }
   

    const dataUpdate: any = { price: 10 }
    
    await createOrUpdateProductsUseCase.execute(dataProduct);

    expect(
      updateProductsUseCase.execute(37, dataUpdate)
    ).rejects.toBeInstanceOf(AppError)
  });
});