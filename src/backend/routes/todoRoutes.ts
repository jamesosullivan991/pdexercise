import express from 'express'
import todoController from '../controllers/todoController'
import { todoCreationValidationRules, validateTodoCreation } from '../middleware/validationMiddleware'

const router = express.Router()

router.post('/',
  todoCreationValidationRules,
  validateTodoCreation,
  todoController.createTodo
)

router.get('/', (req, res) => { res.send('Hello from todoRoutes!') })

export default router
