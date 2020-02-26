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
const bcrypt = __importStar(require("../utils/bcrypt"));
const jwt = __importStar(require("../utils/jwt"));
const loginModel = __importStar(require("../models/loginModel"));
function userLogin(input, token) {
    return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
        let user = yield loginModel.checkUserDb(input.userName);
        if (!user) {
            resolve("plz enter valid user");
            return;
        }
        let id = user.id;
        let userName = user.userName;
        let dbHash = user.password;
        let payload = {
            id: id,
            userName: userName
        };
        let checkDbPass = yield bcrypt.checkHash(input.password, dbHash);
        if (!checkDbPass) {
            resolve("plz enter valid  pass");
            return;
        }
        else {
            let key = "sdakdsaklsadkasdsa";
            let time = 36000;
            let token = yield jwt.createJWTToken(payload, key, time);
            console.log("tokenstart", token, "EndToken");
            let refToken = yield jwt.createJWTToken(payload, key, 72000);
            let c = 0;
            let logObj = {
                userName: input.userName,
                loginTime: Date.now(),
                refreshToken: refToken,
                count: c++
            };
            let Data = yield loginModel.userLoginDb(logObj, userName);
            console.log();
            resolve({ "message": "loggedin Successfully", Data });
        }
    }));
}
exports.userLogin = userLogin;
function createLogin(input) {
    return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
        console.log(input.userName, input.password);
        let hash = yield bcrypt.getHash(input.password);
        let logObj = {
            userName: input.userName,
            password: hash
        };
        let D = new loginModel.loginModel(logObj);
        let r = yield D.save();
        console.log("result:-", r);
        resolve(r);
    }));
}
exports.createLogin = createLogin;
