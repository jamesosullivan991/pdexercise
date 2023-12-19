"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = __importDefault(require("../controllers/userController"));
const validationMiddleware_1 = require("../middleware/validationMiddleware");
const router = express_1.default.Router();
router.post('/', validationMiddleware_1.userCreationValidationRules, validationMiddleware_1.validateUserCreation, userController_1.default.createUser);
router.get('/', (req, res) => { res.send('Hello from userRoutes!'); });
exports.default = router;
