import { type Request, type Response, type NextFunction } from 'express'
import { body, validationResult } from 'express-validator'

// Define the validation rules
export const todoCreationValidationRules = [
  body('description').exists().withMessage('Description is required.'),
]

// Middleware to use the validation rules
export const validateTodoCreation = (req: Request, res: Response, next: NextFunction): void => {
  console.log('req', req.body)
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() })
  } else {
    next()
  }
}
