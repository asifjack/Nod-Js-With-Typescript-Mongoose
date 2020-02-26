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
const assert_1 = require("assert");
const loginSchema = new mongoose.Schema({
    userId: { type: String },
    userName: { type: String },
    password: { type: String },
    deviceName: { type: String },
    ipAddress: { type: String },
    loginTime: { type: String },
    logoutTime: { type: String },
    refreshToken: { type: String },
    count: { type: Number }
});
exports.loginModel = mongoose.model("login", loginSchema);
function userLoginDb(input, userName) {
    return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
        // let D=new loginModel(input);
        let r = yield exports.loginModel.findOneAndUpdate({ "userName": userName }, input, { upsert: true });
        console.log("result:-", r);
        resolve(r);
    }));
}
exports.userLoginDb = userLoginDb;
function checkUserDb(userName) {
    return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
        try {
            //  console.log("adsadsadsadsa befor",userName);
            //  console.log("checkLawBookExists :- ",userName, typeof userName)                                        
            const checkUser = yield exports.loginModel.findOne({ "userName": userName.trim() });
            //  console.log("fronm db-:",checkUser);
            if (checkUser) {
                resolve(checkUser);
            }
            else {
                resolve(false);
            }
        }
        catch (e) {
            assert_1.rejects(e);
        }
    }));
}
exports.checkUserDb = checkUserDb;
function chengePasswordDB(input, userName) {
    return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
        console.log("asifasifasifasif :-", input, userName);
        let x = { password: input };
        let r = yield exports.loginModel.findOneAndUpdate({ "userName": userName }, x, { upsert: true });
        // let r=await loginModel.update({"userNamee":userName},input,);
        console.log("result:-", r);
        resolve(r);
    }));
}
exports.chengePasswordDB = chengePasswordDB;
