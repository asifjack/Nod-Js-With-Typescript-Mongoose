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
// import * as Login from '../controllers/userLogin';
const changePassword = __importStar(require("../controllers/changePassword"));
const router = express.Router();
exports.change = router;
router.post('/changePassword', [], (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let input = req.body;
        let token = req.headers.token;
        let re = yield changePassword.changePassword(input, token);
        res.send(re);
    }
    catch (er) {
        console.log(er);
    }
}));
