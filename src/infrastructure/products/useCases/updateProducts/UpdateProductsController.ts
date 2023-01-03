import { Request, Response } from 'express'
import { container } from 'tsyringe'
import UpdateProductsUseCase from './UpdateProductsUseCase'

export default class CreateOrUpdateProductsController{
  async handle(request: Request, response: Response): Promise<Response> {
    
    const productId = +request.params.productId
    const dataProduct = request.body

    const updateProductsUseCase = container.resolve(UpdateProductsUseCase)

    try {
      const productUpdated = await updateProductsUseCase.execute(productId, dataProduct)
      
      return response.status(200).json(productUpdated)
      
    } catch (error) {
      return response.status(400).json({ error })
    }
  }
}