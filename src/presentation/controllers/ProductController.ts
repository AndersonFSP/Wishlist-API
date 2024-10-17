import { tokens } from '@config/di/tokens'
import type { IProductService } from '@domain/types/IProduct'
import { Request, Response } from 'express'
import { inject, singleton } from 'tsyringe'

@singleton()
export default class ProductController {
  constructor(
    @inject(tokens.ProductService)
    private productService: IProductService
  ) {}

  public async handler(_: Request, response: Response) {
    try {
      const data = await this.productService.getProducts()
      response.status(200).json(data)
    } catch (error) {
      response.status(500).json('Ocorreu um erro no resgate de produtos')
    }
  }
}