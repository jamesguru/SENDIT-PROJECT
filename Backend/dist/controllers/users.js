"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signIn = exports.signUp = exports.getusers = void 0;
const getusers = (req, res) => {
    res.status(200).json({ message: 'all users' });
};
exports.getusers = getusers;
const signUp = (req, res) => {
    const { email } = req.body;
    res.status(200).json({ message: 'user is signup' });
};
exports.signUp = signUp;
const signIn = (req, res) => {
    res.status(200).json({ message: 'users is signin' });
};
exports.signIn = signIn;
