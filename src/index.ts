// Express
import express from 'express'
// CORS
import cors from 'cors'
// ENV
import * as dotenv from 'dotenv'
// Routes
import HomeRoutes from './routes/home.routes'
// Helmet
import helmet from 'helmet'
// Instance
dotenv.config({ path: '.env' })
const app = express()
const port = 3000
// List of allowed origins.
const allowedOrigins = ['http://localhost:3000']
// Options
const options: cors.CorsOptions = {
  origin: allowedOrigins,
}
// Settings
app.use(helmet())
app.use(cors(options))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/home', HomeRoutes)

app.listen(port, () => {
  console.log(`Listening on port http://localhost:${port}..`)
})
