"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUserCreation = exports.userCreationValidationRules = void 0;
const express_validator_1 = require("express-validator");
// Define the validation rules
exports.userCreationValidationRules = [
    (0, express_validator_1.body)('email').isEmail().withMessage('Must be a valid email address'),
    (0, express_validator_1.body)('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
];
// Middleware to use the validation rules
const validateUserCreation = (req, res, next) => {
    console.log("req", req.body);
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
    }
    else {
        next();
    }
};
exports.validateUserCreation = validateUserCreation;
