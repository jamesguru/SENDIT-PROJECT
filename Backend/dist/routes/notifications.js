"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const notifications_1 = require("../controllers/notifications");
const router = (0, express_1.Router)();
router.get('/', notifications_1.getNotifications);
router.post('/', notifications_1.addNotifications);
router.delete('/:id', notifications_1.deleteNotifications);
exports.default = router;
