import * as mongoose from 'mongoose';
import * as loginModel from './loginModel'
export interface insertUser {
    userName: string,
    password: string
}

export interface getUserData {

    id: string,
    userName: string,
    password: string
}
const userSchema = new mongoose.Schema({
    userName: { type: String },
    password: { type: String },
    refreshToken: { type: String }
})

export const userModel = mongoose.model("user", userSchema);


export function getUserByname(userName: string): Promise<boolean> {
    return new Promise(async (resolve, reject) => {
        try {
            //  console.log("adsadsadsadsa befor",userName);


            //  console.log("checkLawBookExists :- ",userName, typeof userName)                                        
            const checkTitle = await userModel.findOne({ "userName": userName.trim() });
            if (checkTitle) {
                resolve(true)
            } else {
                resolve(false)
            }

        }
        catch (e) {
            reject(e);
        }
    });
}



export function userDb(input: any): Promise<any> {
    return new Promise(async (resolve, reject) => {

        try {
            let uM = new userModel(input)
            uM.save(input, (err: any, result: any) => {

                if (err) {
                    console.log("errror   :-", err)

                }
                else {
                    console.log("model response", result);
                    resolve({ "id": result.id, "userName": result.userName, "password": result.password })

                }
            })
        }
        catch (er) {
            console.log(er);

        }

    })
}
export function getAllUserDb(): Promise<getUserData | null> {
    return new Promise(async (resolve, reject) => {
        try {
           let re:any= await loginModel.loginModel.find();
           if(re)
           {

            console.log(re);
            
            resolve(re)
           }
           else{
               reject("error occur")
           }
            
            
        }
        catch (e) {

            console.log(e);

        }

    })
}



export function checkUserExistDb(userName: string): Promise<any> {
    return new Promise(async (resolve, reject) => {
        try {
            console.log("adsadsadsadsa befor", userName);
            console.log("checkLawBookExists :- ", userName, typeof userName)
            const checkTitle = await userModel.findOne({ "userName": userName.trim() });
            console.log("fronm db-:", checkTitle);

            if (checkTitle) {
                resolve(checkTitle)
            } else {
                resolve(false)
            }
        }
        catch (e) {
            reject(e);
        }
    });
}

// insertRefToken
export function insertRefToken(token: string, id: string): Promise<any> {
    return new Promise(async (resolve, reject) => {
        try {
            console.log("adsadsadsadsa befor token", token, id);

            //  let uM = new userModel({token:token})
            // userModel.save({_id:"5d9afab73d03310d671740ac"},{token:token},(err: any, result: any) => {
            await userModel.findOneAndUpdate({ _id: id }, { token: token }, { upsert: true }, (err, result) => {
                if (err) {
                    console.log("errror   :-", err)

                }
                console.log("dsdsdssds :-", result);
            })
        }
        catch (e) {
            reject(e);
        }
    });
}