"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateParcelStatus = exports.getParcelsForUser = exports.softDelete = exports.addParcel = exports.getAllParcels = void 0;
const axios_1 = __importDefault(require("axios"));
const getAllParcels = (req, res) => {
    axios_1.default.get('http://localhost:8000/api/notifications');
};
exports.getAllParcels = getAllParcels;
const addParcel = (req, res) => {
};
exports.addParcel = addParcel;
const softDelete = (req, res) => {
};
exports.softDelete = softDelete;
const getParcelsForUser = (req, res) => {
};
exports.getParcelsForUser = getParcelsForUser;
const updateParcelStatus = (req, res) => {
};
exports.updateParcelStatus = updateParcelStatus;
