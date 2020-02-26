"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let serverConfig = {
    port: parseInt(process.env.PORT) || 5002,
    //   database: { 'uri': 'mongodb+srv://sanjayg:sector22@cluster0-rbgec.mongodb.net/test?retryWrites=true&w=majority'},
    database: { 'uri': 'mongodb+srv://username:userpass@cluster0-fcf8r.mongodb.net/userDb?retryWrites=true&w=majority' },
    keys: {
        JWT_LOGIN_VERIFICATION: "SKDNKANSDNASD",
        JWT_EMAIL_VERIFICATION: "SKDNKANSDNASD",
        JWT_USER_FORGETPASSWORD_VERIFICATION: "SKDNKANQWASWD"
    },
    jwt: {
        JWT_KEY: "sdakdsaklsadkasdsa",
        JWT_EXP_TIME: 36000,
        JWT_REFTOKEN_EXP_TIME: 720000
    },
    URLS: {
        LOGIN_VERIFICATION_BASE_URL: "http://localhost:5001/api/login/verifyLogin",
        EMAIL_VERIFICATION_BASE_URL: "http://localhost:5001/api/register/verifyEmail",
        USER_FORGETPASSWORD_VERIFICATION_BASE_URL: "http://localhost:5001/api/user/verifyUser",
        BUSINESS_VERIFICATION_BASE_URL: "http://localhost:5001/api/business/verifyEmail/"
    }
};
exports.serverConfig = serverConfig;
