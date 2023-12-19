"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const todo_1 = __importDefault(require("../components/todo"));
const HomePage = function welcome() {
    return (react_1.default.createElement("div", { "data-test-id": "welcome-message" },
        react_1.default.createElement(todo_1.default, null)));
};
exports.default = HomePage;
