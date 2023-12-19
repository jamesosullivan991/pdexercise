import express from 'express'
import todoController from '../controllers/todoController'
import { todoCreationValidationRules, validateTodoCreation } from '../middleware/validationMiddleware'

const router = express.Router()

// POST route for creating a todo
router.post('/',
  todoCreationValidationRules,
  validateTodoCreation,
  todoController.createTodo
)

// GET route for retrieving all todos
router.get('/',
  todoController.getTodos
)

// DELETE route for deleting a todo by ID
router.delete('/:id',
  todoController.deleteTodo
)

// PUT route for updating a todo by ID
router.put('/:id',
  todoController.updateTodo
)

export default router
