import { singleton } from 'tsyringe';
import type { IProductRepository, IProductResponse } from '@domain/types/IProduct'
import ProductsMock from '@domain/mocks/Product.json'

@singleton()
export default class ProductRepository implements IProductRepository {
  public getProducts(): Promise<IProductResponse> {
    return new Promise((resolve) => resolve(ProductsMock))
  }
}
