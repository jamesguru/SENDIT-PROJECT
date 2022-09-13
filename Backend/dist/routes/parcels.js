"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const parcels_1 = require("../controllers/parcels");
const router = (0, express_1.default)();
router.get('/', parcels_1.getAllParcels);
router.put('/:id', parcels_1.updateParcelStatus);
router.put('/softdelete/:id', parcels_1.softDelete);
router.get('/:id', parcels_1.getParcelsForUser);
router.post('/', parcels_1.addParcel);
exports.default = router;
