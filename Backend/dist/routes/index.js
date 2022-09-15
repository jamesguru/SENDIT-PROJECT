"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.notificationRoute = exports.parcelRoute = exports.userRoute = void 0;
const user_1 = __importDefault(require("./user"));
exports.userRoute = user_1.default;
const parcels_1 = __importDefault(require("./parcels"));
exports.parcelRoute = parcels_1.default;
const notifications_1 = __importDefault(require("./notifications"));
exports.notificationRoute = notifications_1.default;
