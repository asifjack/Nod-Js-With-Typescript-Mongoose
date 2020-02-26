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
const user = __importStar(require("../controllers/user"));
const router = express.Router();
exports.user = router;
//   // Get one user
//   router.get("/id",[],
//   async(req:express.Request,res:express.Response,next:express.NextFunction)=>{
//     console.log("in user ");
//     res.send("hello")
//   })
//   //Create a new user
//   router.post("/getAll", []);
// router.get('/hello',[],async(req:express.Request,res:express.Response,next:express.NextFunction)=>{
//   let re=user.getALlUser();
//   res.send(re)
// })
// router.post('/hello',[],async(req:express.Request,res:express.Response,next:express.NextFunction)=>{
//   console.log("from user",req.body.name);
//   res.send("hello:-"+req.body.name)
// })
router.post('/createUser', [], (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let data = yield user.createUser(req.body);
        // console.log("in api", data);
        res.send(data);
    }
    catch (er) {
        console.log(er);
    }
}));
router.get('/getAllUser', [], (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let Data = yield user.getALlUser();
        res.send(Data);
    }
    catch (e) {
        console.log(e);
    }
}));
