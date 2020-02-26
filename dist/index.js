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
var mongoose = require('mongoose');
const express = __importStar(require("express"));
const bodyParser = __importStar(require("body-parser"));
const config = __importStar(require("./init/config"));
const api_1 = require("./api");
const api_2 = require("./api");
const api_3 = require("./api");
let app = express.default();
app.use(bodyParser.json());
let apiRoutes = express.Router();
app.use('/api', apiRoutes);
app.use('/user', api_1.user);
app.use('/login', api_2.login);
app.use('/change', api_3.change);
app.get('/hello', [], (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("from main index");
    res.send("hello");
}));
app.listen(5000, () => {
    console.log("server running on port 5000");
});
// let url = "mongodb+srv://username:userpass@cluster0-fcf8r.mongodb.net/userDb?retryWrites=true&w=majority";
let url = config.serverConfig.database.uri;
mongoose.connect(url, function (err, db) {
    if (err) {
        console.log("not connected");
    }
    console.log("Database created!");
});
