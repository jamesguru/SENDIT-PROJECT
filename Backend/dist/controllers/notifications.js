"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteNotifications = exports.addNotifications = exports.getNotifications = void 0;
const getNotifications = (req, res) => {
    console.log('You got notifications');
    res.status(200).json({ message: 'notifications' });
};
exports.getNotifications = getNotifications;
const addNotifications = (req, res) => {
};
exports.addNotifications = addNotifications;
const deleteNotifications = (req, res) => {
};
exports.deleteNotifications = deleteNotifications;
