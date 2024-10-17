import 'reflect-metadata'
import { container } from '@config/di/container'
import App from '@config/app'

const app = container.resolve(App)
app.listen()
