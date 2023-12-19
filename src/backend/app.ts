import express from 'express'
import cors from 'cors'
import routes from './routes' // Assuming userRoutes is a named export from routes.js

const app = express()

app.use(express.json())

app.use(cors({
  origin: 'http://localhost:3000'
}))

app.use('/api/users', routes.userRoutes)

// ... other middleware and route configurations

app.listen(3005, () => { console.log('Server running on port 3005') })
