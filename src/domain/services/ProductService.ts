import { singleton, inject } from 'tsyringe'
import { tokens } from '@config/di/tokens'
import type { IProductRepository, IProductResponse, IProductService } from '@domain/types/IProduct'

@singleton()
export default class ProductService implements IProductService {
  constructor(
    @inject(tokens.ProductRepository)
    private productRepository: IProductRepository
  ) {}

  public getProducts(): Promise<IProductResponse> {
    return this.productRepository.getProducts()
  }
}
