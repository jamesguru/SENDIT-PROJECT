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
exports.deleteNotifications = exports.addNotifications = exports.getNotifications = void 0;
const database_1 = __importDefault(require("../Helpers/database"));
const db = new database_1.default();
const getNotifications = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const notification = yield db.exec('getNotifications');
        res.status(200).json(notification.recordset);
    }
    catch (error) {
        res.status(404).json({ message: 'no notifications' });
    }
});
exports.getNotifications = getNotifications;
const addNotifications = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { trackId, email, message } = req.body;
    try {
        yield db.exec('addNotifications', { trackId, email, message });
        res.status(200).json('notification emitted');
    }
    catch (error) {
        res.status(500).json('something went wrong');
    }
});
exports.addNotifications = addNotifications;
const deleteNotifications = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const trackId = req.params.trackId;
    try {
        yield db.exec('deleteNotifications', { trackId });
        res.status(201).json({ message: 'notifications were deleted successfully' });
    }
    catch (error) {
        res.status(403).json({ message: "notifications was not deleted" });
    }
});
exports.deleteNotifications = deleteNotifications;
