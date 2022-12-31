import { Router } from 'express'
import CreateOrUpdateProductsController from '../useCases/createOrUpdateProducts/CreateOrUpdateProductsController'
import GetAllProductsController from '../useCases/getAllProducts/GetAllProductsController'



const productsRouter = Router()

const createOrUpdateProductsController = new CreateOrUpdateProductsController()
const getAllProductsController = new GetAllProductsController()


productsRouter.post('/', createOrUpdateProductsController.handle)
productsRouter.get('/', getAllProductsController.handle)


export default productsRouter