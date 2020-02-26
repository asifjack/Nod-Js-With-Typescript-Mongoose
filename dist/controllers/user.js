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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserModel = __importStar(require("../models/userModels"));
const bcrypt = __importStar(require("../utils/bcrypt"));
function createUser(input) {
    return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
        try {
            let exist = yield UserModel.getUserByname(input.userName);
            if (exist) {
                resolve("userName Already EXIST");
            }
            else {
                let hash = yield bcrypt.getHash(input.password);
                let inpuObj = {
                    userName: input.userName,
                    password: hash
                };
                let user = yield UserModel.userDb(inpuObj);
                if (user) {
                    // console.log("in con -:", user);
                    resolve({ "status": 200, "message": "Record Insrted Successfully", user });
                }
                else {
                    reject();
                }
            }
        }
        catch (er) {
            console.log(er);
        }
    }));
}
exports.createUser = createUser;
function getALlUser() {
    return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
        try {
            let re = yield UserModel.getAllUserDb();
            if (re) {
                resolve(re);
            }
            else {
                reject();
            }
        }
        catch (e) {
            console.log(e);
        }
    }));
}
exports.getALlUser = getALlUser;
