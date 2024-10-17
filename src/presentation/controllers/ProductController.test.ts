import ProductController from '@presentation/controllers/ProductController'
import { container } from '@config/di/mocks/container'
import ProductService from '@domain/services/ProductService'
import type { Request, Response } from 'express'
import ProductsMock from '@domain/mocks/Product.json'

describe('ProductController', () => {
  beforeEach(() => jest.clearAllMocks());
  const productController = container.resolve(ProductController)
  const mockJson = jest.fn()
  const mockResponse = {
    status: jest.fn().mockReturnValue({ json: mockJson })
  }
  describe("getProducts", () => {
    it("should call correct repository function", async () => {
      await productController.handler({} as Request, mockResponse as unknown as Response)
      expect(mockResponse.status).toHaveBeenCalledWith(200)
      expect(mockJson).toHaveBeenCalledWith(ProductsMock)
    });
  
    it("should return successfully", async () => {
      jest.spyOn(ProductService.prototype, 'getProducts').mockRejectedValue(new Error(''))
      const result = await productController.handler({} as Request, mockResponse as unknown as Response)
      expect(mockResponse.status).toHaveBeenCalledWith(500)
      expect(mockJson).toHaveBeenCalledWith('Ocorreu um erro no resgate de produtos')
    })
  })
})