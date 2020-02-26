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
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require('jsonwebtoken');
function createJWTToken(payload, secretKey, expiresInSecs) {
    return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
        jwt.sign(payload, secretKey, { expiresIn: expiresInSecs }, (err, token) => __awaiter(this, void 0, void 0, function* () {
            if (err) {
                reject(err);
            }
            else {
                resolve(token);
            }
        }));
    }));
}
exports.createJWTToken = createJWTToken;
function verifyJwtToken(token, secrateKey) {
    return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
        jwt.verify(token, secrateKey, (err, payload) => {
            if (err) {
                resolve(err);
            }
            else {
                resolve(payload);
            }
        });
    }));
}
exports.verifyJwtToken = verifyJwtToken;
