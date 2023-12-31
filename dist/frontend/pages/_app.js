"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const MyApp = ({ Component, pageProps }) => {
    return react_1.default.createElement(Component, Object.assign({}, pageProps));
};
exports.default = MyApp;
