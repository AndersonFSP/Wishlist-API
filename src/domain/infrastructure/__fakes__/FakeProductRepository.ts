import { IProductRepository, IProductResponse } from '@domain/types/IProduct'
import { singleton } from 'tsyringe'
import ProductsMock from '@domain/mocks/Product.json'

@singleton()
export default class FakeProductRepository implements IProductRepository {
  static mocks = {
    getProducts: jest.fn().mockResolvedValue(ProductsMock)
  };

  getProducts(): Promise<IProductResponse> {
    return FakeProductRepository.mocks.getProducts()
  }
}
