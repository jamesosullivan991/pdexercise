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
exports.updateTodo = exports.deleteTodo = exports.getTodos = exports.createTodo = void 0;
const todo_1 = __importDefault(require("../models/todo"));
function createTodo(TodoData) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const newTodo = yield todo_1.default.query().insert(TodoData);
            return newTodo;
        }
        catch (error) {
            // log error to error
            throw error;
        }
    });
}
exports.createTodo = createTodo;
function getTodos() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const todos = yield todo_1.default.query();
            return todos;
        }
        catch (error) {
            throw error;
        }
    });
}
exports.getTodos = getTodos;
function deleteTodo(todoId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const deletedTodo = yield todo_1.default.query().deleteById(todoId);
            return deletedTodo;
        }
        catch (error) {
            throw error;
        }
    });
}
exports.deleteTodo = deleteTodo;
function updateTodo(todoId, TodoData) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const updatedTodo = yield todo_1.default.query().patchAndFetchById(todoId, TodoData);
            return updatedTodo;
        }
        catch (error) {
            throw error;
        }
    });
}
exports.updateTodo = updateTodo;
exports.default = { createTodo, getTodos, deleteTodo, updateTodo };
