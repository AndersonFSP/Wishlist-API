import { container } from 'tsyringe'
import { tokens } from '@config/di/tokens'
import ProductRepository from '@domain/infrastructure/__fakes__/FakeProductRepository'
import ProductService from '@domain/services/ProductService'

container.registerSingleton(tokens.ProductRepository, ProductRepository)
container.registerSingleton(tokens.ProductService, ProductService)

export { container }
