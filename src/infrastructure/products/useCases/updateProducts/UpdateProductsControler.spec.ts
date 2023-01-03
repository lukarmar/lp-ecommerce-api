import request from 'supertest'

import app from '../../../../app/app'
import { MONGO_URL_TEST } from '../../../@shared/config/env-manager'
import productsModel from '../../model/products.model'

describe('Update Product', () => {

  afterAll(async () => {
    if(MONGO_URL_TEST) {
      await productsModel.deleteMany({ price: { $gte: 0 } })
    }
  })

  it('should be able to update a one product', async () => {  

    await request(app).post('/products?limit=2&skip=37').send()
    const allProducts = await request(app).get("/products").send()

    const dataPriceUpdate = { price: 2 }
    const response = await request(app)
          .put(`/products/${allProducts.body[0].productId}`).send(dataPriceUpdate)

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("price", dataPriceUpdate.price);
  })
})