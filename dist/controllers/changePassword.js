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
const loginModel = __importStar(require("../models/loginModel"));
const bcrypt = __importStar(require("../utils/bcrypt"));
const config = __importStar(require("../init/config"));
const jwt = __importStar(require("../utils/jwt"));
function changePassword(input, token) {
    return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
        try {
            let userDb = yield loginModel.checkUserDb(input.userName);
            if (!userDb) {
                resolve("userName Not Found");
                return;
            }
            let payload = yield jwt.verifyJwtToken(token, config.serverConfig.jwt.JWT_KEY);
            console.log(payload);
            let chckpass = yield bcrypt.checkHash(input.currentPassword, userDb.password);
            if (!chckpass) {
                resolve("plz enter valid pass");
                return;
            }
            console.log(chckpass);
            let getHash = yield bcrypt.getHash(input.newPassword);
            let updated = yield loginModel.chengePasswordDB(getHash, userDb.userName);
            resolve(updated);
        }
        catch (error) {
        }
    }));
}
exports.changePassword = changePassword;
