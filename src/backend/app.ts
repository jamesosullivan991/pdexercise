import express from 'express'
import cors from 'cors'
import routes from './routes'

const app = express()

app.use(express.json())

app.use(cors({
  origin: 'http://localhost:3000' // change to env
}))

app.use('/api/todos', routes.todoRoutes)

const port = process.env.PORT || 3001

app.listen(port, () => { console.log(`Server running on port ${port}`) })
