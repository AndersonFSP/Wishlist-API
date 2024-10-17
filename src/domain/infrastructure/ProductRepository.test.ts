import { container } from '@config/di/mocks/container'
import ProductRepository from '@domain/infrastructure/ProductRepository'
import ProductsMock from '@domain/mocks/Product.json'

describe('ProductRepository', () => {
  beforeEach(() => jest.clearAllMocks());
  const productRepository = container.resolve(ProductRepository);

  describe('getProducts', () => {
    it("should return successfully", async () => {
      await expect(productRepository.getProducts()).resolves.toEqual(
        ProductsMock
      )
    })
  })
})
