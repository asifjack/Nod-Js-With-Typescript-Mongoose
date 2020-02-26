"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = require("./user");
exports.user = user_1.user;
const userLogin_1 = require("./userLogin");
exports.login = userLogin_1.login;
const changePassword_1 = require("./changePassword");
exports.change = changePassword_1.change;
// import { user } from "./user";
const routes = express_1.Router();
routes.use("/user", user_1.user);
routes.use("/login", userLogin_1.login);
routes.use("/change", changePassword_1.change);
