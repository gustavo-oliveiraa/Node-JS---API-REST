import express from 'express'
import routes from './routes.js'

const app = express()

// Indicar para o express ler body com json
app.use(express.json())

// usar o routes
app.use(routes)

export default app
