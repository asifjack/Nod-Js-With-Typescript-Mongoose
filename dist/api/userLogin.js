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
const express = __importStar(require("express"));
const deviceType = require('device-type');
const Login = __importStar(require("../controllers/userLogin"));
const router = express.Router();
exports.login = router;
router.post('/createUser', [], (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // console.log("ip address",(req as any).ipAddress);
        let ip = req.header('x-forwarded-for') || req.connection.remoteAddress;
        // console.log(ip);
        let data = yield Login.createLogin(req.body);
        res.send(data);
    }
    catch (er) {
        console.log(er);
    }
}));
router.post('/login', [], (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // let ip=(req as any).ipAddress;
        // console.log("ip address",(req as any).ipAddress);
        // console.log("device",(deviceType(req));
        // let deviceName=(req as any).device.name;
        // let ip:any= req.header('x-forwarded-for') || req.connection.remoteAddress;
        // console.log("ipppppppppppppp",ip);
        let token = req.headers.token;
        // console.log("result:-",token,req.body);
        let data = yield Login.userLogin(req.body, token);
        res.send(data);
    }
    catch (er) {
        console.log(er);
    }
}));
