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
const router = express.Router();
exports.user = router;
// Get one user
router.get("/id", [], (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("in user ");
    res.send("hello");
}));
//Create a new user
router.post("/", []);
router.get('/hello', [], (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("from user");
    res.send("hello");
}));
router.post('/hello', [], (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("from user", req.body.name);
    res.send("hello:-" + req.body.name);
}));
