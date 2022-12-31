import { ProductsDTO } from '../DTOs/Products.DTO'

export default class ProductsFactory {

  private _products: ProductsDTO[] = []
  private _allowedCategories: string[] = [] 

  constructor(listProducts: ProductsDTO[]) {
    this._allowedCategories = [
      "tops",
      "womens-dresses",
      "womens-shoes",
      "mens-shirts",
      "mens-shoes",
      "mens-watches",
      "womens-watches",
      "womens-bags",
      "womens-jewellery",
      "sunglasses",
    ]

    this.restrictCategories(listProducts)
  }

  restrictCategories(listProducts: ProductsDTO[]): void  {
    for(const product of listProducts) {
      if(this.allowedCategories.includes(product.category)) {
        this._products.push(product)
      }
    }
  }

  get products(): ProductsDTO[] {
    return this._products
  }

  get allowedCategories(): string[] {
    return this._allowedCategories
  }
}