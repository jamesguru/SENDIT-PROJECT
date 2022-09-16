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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signIn = exports.signUp = exports.getusers = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const userValidation_1 = require("../Helpers/userValidation");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const database_1 = __importDefault(require("../Helpers/database"));
const db = new database_1.default();
const getusers = (req, res) => {
    res.status(200).json({ message: "all users" });
};
exports.getusers = getusers;
const signUp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password } = req.body;
    try {
        const { error, value } = userValidation_1.registerSchema.validate(req.body);
        if (error) {
            res.status(500).json(error.details[0].message);
        }
        const userIndatabase = yield db.exec('userLookUp', { email });
        if (userIndatabase.recordset.length) {
            res.status(401).json({ message: "user is already in database" });
        }
        else {
            const hashedPassword = yield bcrypt_1.default.hash(password, 10);
            yield db.exec("signup", {
                name,
                email,
                password: hashedPassword,
            });
            res.status(201).json({ message: 'you registared successfully' });
        }
    }
    catch (error) {
        res.status(500).json({ message: "something went wrong" });
    }
});
exports.signUp = signUp;
const signIn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        const { error, value } = userValidation_1.loginSchema.validate(req.body);
        const user = yield db.exec("signin", { email });
        if (!(user === null || user === void 0 ? void 0 : user.recordset[0])) {
            return res.status(400).json({ message: "user is not defined" });
        }
        const userData = user === null || user === void 0 ? void 0 : user.recordset[0];
        bcrypt_1.default.compare(password, userData.password, (err, data) => {
            if (data) {
                const { role, name, id, email } = userData, others = __rest(userData, ["role", "name", "id", "email"]);
                const user = { role, name, id, email };
                const token = jsonwebtoken_1.default.sign(user, process.env.KEY, {
                    expiresIn: "30days",
                });
                res.status(200).json({ user, token });
            }
            else {
                res.status(401).json({ message: "wrong password" });
            }
        });
        if (error) {
            res.status(500).json(error.details[0].message);
        }
    }
    catch (error) { }
});
exports.signIn = signIn;
