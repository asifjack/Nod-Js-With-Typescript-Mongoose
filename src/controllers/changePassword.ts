import * as loginModel from '../models/loginModel'
import { user } from '../api';
import * as bcrypt from '../utils/bcrypt';
import * as config from '../init/config';
import * as jwt from '../utils/jwt';
import * as mongoose from 'mongoose';
export function changePassword(input: User.ChangePasswordRequest, token: any): Promise<any> {
    return new Promise(async (resolve, reject) => {
        try {

            let userDb = await loginModel.checkUserDb(input.userName)
            if (!userDb) {
                resolve("userName Not Found")
                return;
            }
            let payload = await jwt.verifyJwtToken(token, config.serverConfig.jwt.JWT_KEY)
            console.log(payload);

            let chckpass = await bcrypt.checkHash(input.currentPassword, userDb.password);
            if (!chckpass) {

                resolve("plz enter valid pass")
                return
            }
            console.log(chckpass);
            let getHash = await bcrypt.getHash(input.newPassword);
            let updated = await loginModel.chengePasswordDB(getHash, userDb.userName)
            resolve(updated)

        } catch (error) {

        }
    })
}