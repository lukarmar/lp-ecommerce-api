import ProductsFactory from "./products.factory"
import { products } from '../mock/products.mock'

describe("Allowed Categories", () => {
  it("should be able to return products whit categories alloweds", () => {

    const allowedProductsCategories = new ProductsFactory(products)

    const returnValueTrueCategories = allowedProductsCategories.products.every(element => (
      allowedProductsCategories.allowedCategories.includes(element.category)
    ))

    expect(returnValueTrueCategories).toBeTruthy()

  })
})