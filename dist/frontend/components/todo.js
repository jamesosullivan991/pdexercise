"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const react_1 = __importStar(require("react"));
const axios_1 = __importDefault(require("axios"));
const todo_1 = require("../styles/todo");
const axiosInstance = axios_1.default.create({
    baseURL: process.env.API_URL || 'http://localhost:3001'
});
const Todo = () => {
    const [todos, setTodos] = (0, react_1.useState)([]);
    const [filter, setFilter] = (0, react_1.useState)('all');
    const [newTodo, setNewTodo] = (0, react_1.useState)('');
    (0, react_1.useEffect)(() => {
        fetchTodos();
    }, [filter]);
    const fetchTodos = () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield axiosInstance.get(`/api/todos?filter=${filter}`);
        setTodos(response.data);
    });
    const addTodo = () => __awaiter(void 0, void 0, void 0, function* () {
        yield axiosInstance.post('/api/todos', { description: newTodo });
        setNewTodo('');
        fetchTodos();
    });
    const toggleComplete = (id) => __awaiter(void 0, void 0, void 0, function* () {
        yield axiosInstance.patch(`/api/todos/${id}`);
        fetchTodos();
    });
    const deleteTodo = (id) => __awaiter(void 0, void 0, void 0, function* () {
        yield axiosInstance.delete(`/api/todos/${id}`);
        fetchTodos();
    });
    const clearCompleted = () => __awaiter(void 0, void 0, void 0, function* () {
        yield axiosInstance.delete('/api/todos?filter=completed');
        fetchTodos();
    });
    return (react_1.default.createElement(todo_1.Container, null,
        react_1.default.createElement(todo_1.Input, { type: "text", value: newTodo, onChange: (e) => setNewTodo(e.target.value), placeholder: "Add new todo" }),
        react_1.default.createElement(todo_1.Button, { onClick: addTodo }, "Add Todo"),
        react_1.default.createElement(todo_1.TodoList, null, todos.map((todo, idx) => (react_1.default.createElement(todo_1.TodoItem, { key: idx },
            react_1.default.createElement("input", { type: "checkbox", checked: todo.completed, onChange: () => toggleComplete(todo.id) }),
            todo.description,
            react_1.default.createElement(todo_1.Button, { onClick: () => deleteTodo(todo.id) }, "Delete"))))),
        react_1.default.createElement(todo_1.Button, { onClick: () => setFilter('all') }, "All"),
        react_1.default.createElement(todo_1.Button, { onClick: () => setFilter('active') }, "Active"),
        react_1.default.createElement(todo_1.Button, { onClick: () => setFilter('completed') }, "Completed"),
        react_1.default.createElement(todo_1.Button, { onClick: clearCompleted }, "Clear Completed")));
};
exports.default = Todo;
