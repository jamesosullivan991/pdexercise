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
exports.createUser = void 0;
// userService.js
const user_1 = __importDefault(require("../models/user"));
function createUser(userData) {
    return __awaiter(this, void 0, void 0, function* () {
        // Business logic here
        // For example, check if a user with the same email already exists
        const existingUser = yield user_1.default.query().findOne({ email: userData.email });
        if (existingUser) {
            throw new Error('User already exists');
        }
        // Proceed with user creation
        const newUser = yield user_1.default.query().insert(userData);
        return newUser;
    });
}
exports.createUser = createUser;
exports.default = { createUser };
