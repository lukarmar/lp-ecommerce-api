import request from 'supertest'

import app from '../../../../app/app'
import { MONGO_URL_TEST } from '../../../@shared/config/env-manager'
import productsModel from '../../model/products.model'
import { SaveDataProductDTO } from '../../../../domain/products/DTOs/SaveDataProductDTO'

describe('Create Product', () => {

  afterAll(async () => {
    if(MONGO_URL_TEST) {
      await productsModel.deleteMany({ price: { $gte: 0 } })
    }
  })

  it('should be able to create a new product', async () => {  

    const response = await request(app).post('/products?limit=2&skip=36').send();

    expect(response.status).toBe(201);

  })
})