"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const HomePage = function welcome() {
    return (<div data-test-id="welcome-message">
      Welcome to your code exercise!
    </div>);
};
exports.default = HomePage;
