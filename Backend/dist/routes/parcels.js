"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const parcels_1 = require("../controllers/parcels");
const verifytoken_1 = require("../middlewares/verifytoken");
const router = (0, express_1.default)();
router.get('/', verifytoken_1.VerifyToken, parcels_1.getAllParcels);
router.put('/:id', verifytoken_1.VerifyToken, parcels_1.updateParcelStatus);
router.put('/softdelete/:id', verifytoken_1.VerifyToken, parcels_1.softDelete);
router.post('/userparcels', verifytoken_1.VerifyToken, parcels_1.getParcelsForUser);
router.post('/', verifytoken_1.VerifyToken, parcels_1.addParcel);
exports.default = router;
