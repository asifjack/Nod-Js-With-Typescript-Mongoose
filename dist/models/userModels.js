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
const mongoose = __importStar(require("mongoose"));
const loginModel = __importStar(require("./loginModel"));
const userSchema = new mongoose.Schema({
    userName: { type: String },
    password: { type: String },
    refreshToken: { type: String }
});
exports.userModel = mongoose.model("user", userSchema);
function getUserByname(userName) {
    return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
        try {
            //  console.log("adsadsadsadsa befor",userName);
            //  console.log("checkLawBookExists :- ",userName, typeof userName)                                        
            const checkTitle = yield exports.userModel.findOne({ "userName": userName.trim() });
            if (checkTitle) {
                resolve(true);
            }
            else {
                resolve(false);
            }
        }
        catch (e) {
            reject(e);
        }
    }));
}
exports.getUserByname = getUserByname;
function userDb(input) {
    return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
        try {
            let uM = new exports.userModel(input);
            uM.save(input, (err, result) => {
                if (err) {
                    console.log("errror   :-", err);
                }
                else {
                    console.log("model response", result);
                    resolve({ "id": result.id, "userName": result.userName, "password": result.password });
                }
            });
        }
        catch (er) {
            console.log(er);
        }
    }));
}
exports.userDb = userDb;
function getAllUserDb() {
    return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
        try {
            let re = yield loginModel.loginModel.find();
            if (re) {
                console.log(re);
                resolve(re);
            }
            else {
                reject("error occur");
            }
        }
        catch (e) {
            console.log(e);
        }
    }));
}
exports.getAllUserDb = getAllUserDb;
function checkUserExistDb(userName) {
    return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
        try {
            console.log("adsadsadsadsa befor", userName);
            console.log("checkLawBookExists :- ", userName, typeof userName);
            const checkTitle = yield exports.userModel.findOne({ "userName": userName.trim() });
            console.log("fronm db-:", checkTitle);
            if (checkTitle) {
                resolve(checkTitle);
            }
            else {
                resolve(false);
            }
        }
        catch (e) {
            reject(e);
        }
    }));
}
exports.checkUserExistDb = checkUserExistDb;
// insertRefToken
function insertRefToken(token, id) {
    return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
        try {
            console.log("adsadsadsadsa befor token", token, id);
            //  let uM = new userModel({token:token})
            // userModel.save({_id:"5d9afab73d03310d671740ac"},{token:token},(err: any, result: any) => {
            yield exports.userModel.findOneAndUpdate({ _id: id }, { token: token }, { upsert: true }, (err, result) => {
                if (err) {
                    console.log("errror   :-", err);
                }
                console.log("dsdsdssds :-", result);
            });
        }
        catch (e) {
            reject(e);
        }
    }));
}
exports.insertRefToken = insertRefToken;
