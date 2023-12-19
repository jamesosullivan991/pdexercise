import { type Request, type Response, type NextFunction } from 'express'
import { body, validationResult } from 'express-validator'

// Define the validation rules
export const userCreationValidationRules = [
  body('email').isEmail().withMessage('Must be a valid email address'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
]

// Middleware to use the validation rules
export const validateUserCreation = (req: Request, res: Response, next: NextFunction): void => {
  console.log('req', req.body)
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() })
  } else {
    next()
  }
}
