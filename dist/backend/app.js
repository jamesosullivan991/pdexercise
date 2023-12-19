"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes")); // Assuming userRoutes is a named export from routes.js
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: 'http://localhost:3000'
}));
app.use('/api/users', routes_1.default.userRoutes);
// ... other middleware and route configurations
app.listen(3005, () => console.log('Server running on port 3005'));
