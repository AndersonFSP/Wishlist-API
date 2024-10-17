import { container } from 'tsyringe'
import { tokens } from '@config/di/tokens'
import ProductRepository from '@domain/infrastructure/ProductRepository'
import ProductService from '@domain/services/ProductService'
import ProductController from '@presentation/controllers/ProductController'

//Products
container.registerSingleton(tokens.ProductRepository, ProductRepository)
container.registerSingleton(tokens.ProductService, ProductService)
container.registerSingleton(tokens.ProductController, ProductController)

export { container }