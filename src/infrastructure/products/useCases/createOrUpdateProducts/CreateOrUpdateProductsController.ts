import { Request, Response } from 'express'
import { container } from 'tsyringe'
import CreateOrUpdateProductsUseCase from './CreateOrUpdateProductsUseCase'
import ProductsFactory from '../../../../domain/products/factory/products.factory'

import { getRequestDataProducts } from '../../../utils/api-provider' 

export default class CreateOrUpdateProductsController{
  async handle(request: Request, response: Response): Promise<Response> {
    
    const limit = +request.query.limit || 30
    const skip = +request.query.skip || 0

    const createOrUpdateProductsUseCase = container.resolve(CreateOrUpdateProductsUseCase)

    try {

      const dataProducts = await getRequestDataProducts(limit, skip)
      const productsCollection = new ProductsFactory(dataProducts)
     
      for(const product of productsCollection.products){
        await createOrUpdateProductsUseCase.execute(product)
      }
      
      return response.status(201).send({ sucess: "OK" })
      
    } catch (error) {
      return response.status(400).json({ error })
    }
  }
}