"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerifyToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const VerifyToken = (req, res, next) => {
    try {
        // const token = req.headers['token'] as string
        const bearerHeader = req.headers['authorization'];
        const bearer = bearerHeader.split(' ');
        const token = bearer[1];
        if (!token) {
            return res.status(403).json({ message: "You are not authenticated" });
        }
        const data = jsonwebtoken_1.default.verify(token, process.env.KEY);
        req.info = data;
    }
    catch (error) {
        return res.json({ error });
    }
    next();
};
exports.VerifyToken = VerifyToken;
