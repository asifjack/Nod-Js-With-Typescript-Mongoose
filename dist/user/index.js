"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = require("./user");
exports.user = user_1.user;
const routes = express_1.Router();
routes.use("/user", user_1.user);
