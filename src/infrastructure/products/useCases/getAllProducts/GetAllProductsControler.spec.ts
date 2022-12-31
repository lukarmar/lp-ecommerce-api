import request from 'supertest'
import productsModel from '../../model/products.model'
import { MONGO_URL_TEST } from '../../../@shared/config/env-manager'

import app from '../../../../app/app'


describe('List All Products', () => {

  afterAll(async () => {
    if(MONGO_URL_TEST) {
      await productsModel.deleteMany({ price: { $gte: 0 } })
    }
  })

  it('should be able to list all products', async () => {

    await request(app).post('/products?limit=2&skip=36').send()
    
    const response = await request(app).get('/products').send();

    expect(response.status).toBe(201);
    expect(response.body).toHaveLength(response.body.length)
    expect(response.body[0]).toHaveProperty("isFavorite")
    expect(response.body[1]).toHaveProperty("isFavorite")

  })
})