import * as UserModel from '../models/userModels';
import * as bcrypt from '../utils/bcrypt';


export function createUser(input: User.CreateRequest): Promise<any> {
    return new Promise(async (resolve, reject) => {
        try {

            let exist = await UserModel.getUserByname(input.userName);

            if (exist) {
                resolve("userName Already EXIST")

            } else {

                let hash = await bcrypt.getHash(input.password)

                let inpuObj: UserModel.insertUser = {
                    userName: input.userName,
                    password: hash
                }
                let user = await UserModel.userDb(inpuObj);
                if (user) {
                    // console.log("in con -:", user);
                    resolve({ "status": 200, "message": "Record Insrted Successfully", user })
                }
                else {
                    reject()
                }

            }
        }
        catch (er) {

            console.log(er);

        }
    });

}

export function getALlUser(): Promise<any> {
    return new Promise(async (resolve, reject) => {
        try {
            let re = await UserModel.getAllUserDb()
            if (re) {
                resolve(re)
            }
            else {
                reject()
            }
        }
        catch (e) {
            console.log(e);

        }
    })

}