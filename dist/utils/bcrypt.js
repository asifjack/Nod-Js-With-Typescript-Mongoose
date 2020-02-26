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
const bcrypt = require('bcrypt');
function getHash(password) {
    return new Promise((resolve, rejects) => __awaiter(this, void 0, void 0, function* () {
        bcrypt.hash(password, 12, (er, hash) => __awaiter(this, void 0, void 0, function* () {
            console.log(hash, "hash");
            resolve(hash);
        }));
    }));
}
exports.getHash = getHash;
function checkHash(password, hashPassword) {
    return new Promise((resolve, rejects) => __awaiter(this, void 0, void 0, function* () {
        bcrypt.compare(password, hashPassword, (er, red) => __awaiter(this, void 0, void 0, function* () {
            resolve(red);
        }));
    }));
}
exports.checkHash = checkHash;
