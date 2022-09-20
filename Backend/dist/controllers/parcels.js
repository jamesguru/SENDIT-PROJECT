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
exports.updateParcelStatus = exports.getParcelsForUser = exports.softDelete = exports.addParcel = exports.getAllParcels = void 0;
const axios_1 = __importDefault(require("axios"));
const database_1 = __importDefault(require("../Helpers/database"));
const db = new database_1.default();
const getAllParcels = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const parcel = yield db.exec('getAllParcels');
        res.status(200).json(parcel.recordset);
    }
    catch (error) {
        res.status(404).json({ message: 'parcel not found' });
    }
});
exports.getAllParcels = getAllParcels;
const addParcel = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, senderEmail, receiverEmail, trackId, location, destination, dispatchedDate, weight, price, markers, status, deleted } = req.body;
    try {
        yield db.exec('insertUpdateParcel', { id, senderEmail, receiverEmail, trackId, location, destination, dispatchedDate, weight, price, markers, status, deleted });
        res.status(200).json({ message: 'parcel added successfully' });
    }
    catch (error) {
        res.status(400).json({ message: 'parcel upload failed' });
    }
});
exports.addParcel = addParcel;
const softDelete = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const { deleted } = req.body;
    try {
        yield db.exec('softDelete', { id, deleted });
        res.status(201).json({ message: 'data has been deleted successfully' });
    }
    catch (error) {
        res.status(400).json({ message: 'data has not been added' });
    }
});
exports.softDelete = softDelete;
const getParcelsForUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.body;
    try {
        const parcels = yield db.exec('getParcelsForUser', { email });
        res.status(200).json(parcels.recordset);
    }
    catch (error) {
        res.status(404).json({ message: 'Parcel was not found' });
    }
});
exports.getParcelsForUser = getParcelsForUser;
const updateParcelStatus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('updated successfully');
    const id = req.params.id;
    console.log(id);
    const { senderEmail, receiverEmail, trackId, location, destination, dispatchedDate, weight, price, markers, status, deleted } = req.body;
    try {
        yield db.exec('insertUpdateParcel', { id, senderEmail, receiverEmail, trackId, location, destination, dispatchedDate, weight, price, markers, status, deleted });
        yield axios_1.default.post('http://localhost:8000/api/notifications', { trackId, email: receiverEmail, message: `Your order ${trackId} has been delivered` });
        yield axios_1.default.post('http://localhost:8000/api/notifications', { trackId, email: senderEmail, message: `The order ${trackId} has been delivered` });
        res.status(201).json({ message: 'parcel updated successfully' });
    }
    catch (error) {
        res.status(404).json({ message: 'parcel was not found' });
    }
});
exports.updateParcelStatus = updateParcelStatus;
