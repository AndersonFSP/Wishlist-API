import { Router, type IRouter } from 'express'
import { singleton } from 'tsyringe'
import ProductController from '@presentation/controllers/ProductController'

@singleton()
export class RootRouter {
  private router: IRouter 

  constructor(private productController: ProductController) {
    this.router = Router()
  }

  public setupRoutes() {
    this.router.get(
      '/products',
      (request, response) => this.productController.handler(request, response)
    )
    return this.router
  }
}