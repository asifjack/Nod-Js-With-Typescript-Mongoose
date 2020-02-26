"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import * as nodemailer from 'nodemailer';
const nodemailer = require('nodemailer');
var transport = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: "mdasifwr@gmail.com",
        password: "MAWR#12345"
    }
});
function sendMail(to, subject, message) {
    let mail = {
        from: "mdasifwr@gmail.com",
        to: to,
        subject: subject,
        text: message
    };
    transport.sendMail(mail, function (err, re) {
        if (err) {
            console.log("success");
            console.log(err);
        }
        else {
            console.log(re.response);
        }
    });
}
exports.sendMail = sendMail;
