"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SignUpForm_1 = __importDefault(require("../components/SignUpForm"));
// import styles from '../styles/signup.module.css';
function SignUpPage() {
    return (<div>
      <h1>Sign Upz</h1>
      <SignUpForm_1.default />
    </div>);
}
exports.default = SignUpPage;
