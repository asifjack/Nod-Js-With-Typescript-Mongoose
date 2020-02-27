import * as mongoose from 'mongoose';
import { rejects } from 'assert';

export interface chengePasswordRequest 
{
    password: string
}

export interface loginInput
 {
    userId?: string,
    userName?: string,
    deviceName?: string,
    // ipAddress:string,
    loginTime?: number,
    logoutTime?: number,
    refreshToken?: string,
    count?: number
}
export interface createLogin 
{

    userName?: string,
    password: string,
}
const loginSchema = new mongoose.Schema({
    userId: { type: String },
    userName: { type: String },
    password: { type: String },
    deviceName: { type: String },
    ipAddress: { type: String },
    loginTime: { type: String },
    logoutTime: { type: String },
    refreshToken: { type: String },
    count: { type: Number }
});

export const loginModel = mongoose.model("login", loginSchema);
export function userLoginDb(input: loginInput, userName: string): Promise<any> 
{
    return new Promise(async (resolve, reject) => {
        // let D=new loginModel(input);
        let r = await loginModel.findOneAndUpdate({ "userName": userName }, input, { upsert: true });
        console.log("result:-", r);
        resolve(r)
    })
}


export function checkUserDb(userName: string): Promise<any> 
{
    return new Promise(async (resolve, reject) => 
    {
        try 
        {
            //  console.log("adsadsadsadsa befor",userName);
            //  console.log("checkLawBookExists :- ",userName, typeof userName)                                        
            const checkUser = await loginModel.findOne({ "userName": userName.trim() });
            //  console.log("fronm db-:",checkUser);

            if (checkUser) 
            {
                resolve(checkUser)
            } 
            else 
            {
                resolve(false)
            }
        }
        catch (e) 
        {
            rejects(e);
        }
    });
}

export function chengePasswordDB(input: string, userName: string): Promise<any> 
{
    return new Promise(async (resolve, reject) => 
    {
        console.log("asifasifasifasif :-", input, userName);
        let x: chengePasswordRequest = { password: input }
        let r = await loginModel.findOneAndUpdate({ "userName": userName }, x, { upsert: true });
        // let r=await loginModel.update({"userNamee":userName},input,);
        console.log("result:-", r);
        resolve(r)
    })
}