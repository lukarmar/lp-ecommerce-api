import { Request, Response } from 'express'
import { container } from 'tsyringe'
import GetAllProductsUseCase from './GetAllProductsUseCase'

export default class GetAllProductsController{
  async handle(request: Request, response: Response): Promise<Response> {

    const getAllProductsUseCase = container.resolve(GetAllProductsUseCase)

    try {

      const products = await getAllProductsUseCase.execute()

      return response.status(201).json(products)
      
    } catch (error) {
      return response.status(400).json({ error: error.message })
    }


  }
}