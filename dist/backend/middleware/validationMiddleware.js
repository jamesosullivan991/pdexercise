"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateTodoCreation = exports.todoCreationValidationRules = void 0;
const express_validator_1 = require("express-validator");
// Define the validation rules
exports.todoCreationValidationRules = [
    (0, express_validator_1.body)('description').exists().withMessage('Description is required.'),
];
// Middleware to use the validation rules
const validateTodoCreation = (req, res, next) => {
    console.log('req', req.body);
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
    }
    else {
        next();
    }
};
exports.validateTodoCreation = validateTodoCreation;
