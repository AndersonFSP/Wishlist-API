import { singleton } from 'tsyringe'
import { RootRouter } from '@config/router'
import express, { type Express } from 'express'
import dotenv from 'dotenv'
import cors from 'cors';

@singleton()
export default class App {
  private server: Express

  constructor(
    private routes: RootRouter
  ) {
    dotenv.config();
    this.server = express()
    this.setupCors()
    this.setParser()
    this.setupRoutes()
  }

  private setParser() {
    this.server.use(express.json())
  }

  private setupRoutes() {
    this.server.use('/', this.routes.setupRoutes())
  }

  private setupCors() {
    this.server.use(cors())
  }

  public listen() {
    const port = process.env.PORT ?? 3000
    this.server.listen(process.env.PORT, () => {
      console.log(`Servidor rodando na porta ${port}`)
    })
  }
}
