"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const todoService_1 = __importDefault(require("../services/todoService"));
const todoController = {
    createTodo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newTodo = yield todoService_1.default.createTodo(req.body);
                res.status(201).json(newTodo);
            }
            catch (error) {
                res.status(500).json({ message: error.message });
            }
        });
    },
    getTodos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const todos = yield todoService_1.default.getTodos();
                res.status(200).json(todos);
            }
            catch (error) {
                res.status(500).json({ message: error.message });
            }
        });
    },
    deleteTodo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const todoId = req.params.id;
                const deletedTodo = yield todoService_1.default.deleteTodo(todoId);
                if (deletedTodo) {
                    res.status(200).json({ message: 'Todo successfully deleted' });
                }
                else {
                    res.status(404).json({ message: 'Todo not found' });
                }
            }
            catch (error) {
                res.status(500).json({ message: error.message });
            }
        });
    },
    updateTodo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const todoId = req.params.id;
                const TodoData = req.body;
                const updatedTodo = yield todoService_1.default.updateTodo(todoId, TodoData);
                if (updatedTodo) {
                    res.status(200).json(updatedTodo);
                }
                else {
                    res.status(404).json({ message: 'Todo not found' });
                }
            }
            catch (error) {
                res.status(500).json({ message: error.message });
            }
        });
    }
};
exports.default = todoController;
