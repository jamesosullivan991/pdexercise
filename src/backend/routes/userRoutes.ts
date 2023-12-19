import express from 'express'
import userController from '../controllers/userController'
import { userCreationValidationRules, validateUserCreation } from '../middleware/validationMiddleware'

const router = express.Router()

router.post('/',
  userCreationValidationRules,
  validateUserCreation,
  userController.createUser
)

router.get('/', (req, res) => { res.send('Hello from userRoutes!') })

export default router
