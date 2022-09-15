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
const ejs_1 = __importDefault(require("ejs"));
const send_mail_1 = __importDefault(require("../Helpers/send_mail"));
const sendDeliveredParcelEmail = (email, trackId) => __awaiter(void 0, void 0, void 0, function* () {
    ejs_1.default.renderFile('templates/deliveredparcel.ejs', { trackId }, (err, data) => __awaiter(void 0, void 0, void 0, function* () {
        let messageoption = {
            from: process.env.EMAIL,
            to: email,
            subject: `Hello your parcel has been delivered`,
            html: data,
            attachments: [{
                    filename: 'parcel.txt',
                    content: 'Here is the content for the parcel delivered'
                }]
        };
        try {
            (0, send_mail_1.default)(messageoption);
        }
        catch (error) {
            console.log(err);
        }
    }));
});
exports.default = sendDeliveredParcelEmail;
