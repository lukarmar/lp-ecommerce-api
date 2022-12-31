import { ProductsDTO } from '../../../../domain/products/DTOs/Products.DTO';
import ProductsRepositoryFakeImplementation from '../../repositories/fake-implementations/catalog.repository.fakeImplementation';
import CreateOrUpdateProductsUseCase from './CreateOrUpdateProductsUseCase';


let productsRepositoryFakeImplementation: ProductsRepositoryFakeImplementation
let createOrUpdateProductsUseCase: CreateOrUpdateProductsUseCase;


describe("Create or Update Product", () => {

  beforeEach(() => {

    productsRepositoryFakeImplementation = new ProductsRepositoryFakeImplementation();
    createOrUpdateProductsUseCase = new CreateOrUpdateProductsUseCase(productsRepositoryFakeImplementation);
  })

  it("should be able to create product", async () => {
    
    const dataProduct: ProductsDTO = {
      id: 36,
      title: "Sleeve Shirt Womens",
      description: "Cotton Solid Color Professional Wear Sleeve Shirt Womens Work Blouses Wholesale Clothing Casual Plain Custom Top OEM Customized",
      price: 90,
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
    
    const product = await createOrUpdateProductsUseCase.execute(dataProduct);
    
    expect(product).toHaveProperty("isFavorite");
  });

  it("should be able to update product", async () => {
    
    const dataProduct1: ProductsDTO = {
      id: 36,
      title: "Sleeve Shirt Womens",
      description: "Cotton Solid Color Professional Wear Sleeve Shirt Womens Work Blouses Wholesale Clothing Casual Plain Custom Top OEM Customized",
      price: 90,
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

    const dataProduct2: ProductsDTO = {
    id: 37,
		title: "ank Tops for Womens/Girls",
		description: "PACK OF 3 CAMISOLES ,VERY COMFORTABLE SOFT COTTON STUFF, COMFORTABLE IN ALL FOUR SEASONS",
		price: 50,
		rating: 4.52,
		stock: 107,
		brand: "Soft Cotton",
		category: "tops",
		thumbnail: "https://i.dummyjson.com/data/products/37/thumbnail.jpg",
		images: [
			"https://i.dummyjson.com/data/products/37/1.jpg",
			"https://i.dummyjson.com/data/products/37/2.jpg",
			"https://i.dummyjson.com/data/products/37/3.jpg",
			"https://i.dummyjson.com/data/products/37/4.jpg",
			"https://i.dummyjson.com/data/products/37/thumbnail.jpg"
		],
    }
   
    await Promise.all(
      [
        createOrUpdateProductsUseCase.execute(dataProduct1),
        createOrUpdateProductsUseCase.execute(dataProduct2)
      ]
    )

    const changePriceProduct2:ProductsDTO = {
      ...dataProduct2,
      price: 100
    }

    const productUpdated = await createOrUpdateProductsUseCase.execute(changePriceProduct2)

    expect(productUpdated.price).toBe(100)
    
  });

});