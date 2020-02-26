// import * as nodemailer from 'nodemailer';
const nodemailer = require('nodemailer');


var transport = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: "mdasifwr@gmail.com",
        password: "MAWR#12345"
    }
});


export function sendMail(to: string, subject: string, message: string) {
    let mail = {
        from: "mdasifwr@gmail.com",
        to: to,
        subject: subject,
        text: message
    }

    transport.sendMail(mail, function (err: any, re: any) {
        if (err) {
            console.log("success");

            console.log(err);

        }
        else {
            console.log(re.response);

        }

    }
    );

}
