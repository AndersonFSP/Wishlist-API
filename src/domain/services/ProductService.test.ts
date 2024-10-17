import { container } from '@config/di/mocks/container'
import ProductService from '@domain/services/ProductService'
import ProductsMock from '@domain/mocks/Product.json'
import FakeProductRepository from '@domain/infrastructure/__fakes__/FakeProductRepository'

describe('ProductService', () => {
  beforeEach(() => jest.clearAllMocks());
  const productService = container.resolve(ProductService)

  describe('getProducts', () => {
    it('should call correct repository function', async () => {
      await productService.getProducts()
      expect(FakeProductRepository.mocks.getProducts).toHaveBeenCalled()
    });
    it('should return successfully', async () => {
      const result = await productService.getProducts()
      expect(result).toEqual(ProductsMock)
    })
  })
})
