import { Router } from 'express'
import CreateOrUpdateProductsController from '../useCases/createOrUpdateProducts/CreateOrUpdateProductsController'
import GetAllProductsController from '../useCases/getAllProducts/GetAllProductsController'
import UpdateProductsController from '../useCases/updateProducts/UpdateProductsController'



const productsRouter = Router()

const createOrUpdateProductsController = new CreateOrUpdateProductsController()
const getAllProductsController = new GetAllProductsController()
const updateProductsController = new UpdateProductsController()


productsRouter.post('/', createOrUpdateProductsController.handle)
productsRouter.get('/', getAllProductsController.handle)
productsRouter.put("/:productId", updateProductsController.handle)


export default productsRouter