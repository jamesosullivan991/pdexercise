"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todoController_1 = __importDefault(require("../controllers/todoController"));
const validationMiddleware_1 = require("../middleware/validationMiddleware");
const router = express_1.default.Router();
// POST route for creating a todo
router.post('/', validationMiddleware_1.todoCreationValidationRules, validationMiddleware_1.validateTodoCreation, todoController_1.default.createTodo);
// GET route for retrieving all todos
router.get('/', todoController_1.default.getTodos);
// DELETE route for deleting a todo by ID
router.delete('/:id', todoController_1.default.deleteTodo);
// PUT route for updating a todo by ID
router.put('/:id', todoController_1.default.updateTodo);
exports.default = router;
