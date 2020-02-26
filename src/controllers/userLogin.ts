import * as bcrypt from '../utils/bcrypt';
import * as jwt from '../utils/jwt';
import * as loginModel from '../models/loginModel'

export function userLogin(input: User.CreateRequest, token: any): Promise<any> 
{
    return new Promise(async (resolve, reject) => 
    {

        let user = await loginModel.checkUserDb(input.userName)
        if (!user) 
        {
            resolve("plz enter valid user");
            return
        }

        let id = user.id;
        let userName = user.userName;
        let dbHash = user.password;
        let payload = 
        {
            id: id,
            userName: userName
        }
        let checkDbPass = await bcrypt.checkHash(input.password, dbHash);
        if (!checkDbPass) 
        {
            resolve("plz enter valid  pass")
            return
        } 
        else 
        {
            let key = "sdakdsaklsadkasdsa";
            let time = 36000;
            let token = await jwt.createJWTToken(payload, key, time);
            console.log("tokenstart", token, "EndToken");

            let refToken = await jwt.createJWTToken(payload, key, 72000);
            let c = 0;
            let logObj: loginModel.loginInput = 
            {
                userName: input.userName,
                loginTime: Date.now(),
                refreshToken: refToken,
                count: c++
            }
            let Data = await loginModel.userLoginDb(logObj, userName);
            console.log();
            resolve({ "message": "loggedin Successfully", Data })
        }
    })
}


export function createLogin(input: any): Promise<any> 
{
    return new Promise(async (resolve, reject) => 
    {

        console.log(input.userName, input.password);
        let hash = await bcrypt.getHash(input.password);

        let logObj: loginModel.createLogin = 
        {
            userName: input.userName,
            password: hash
        }

        let D = new loginModel.loginModel(logObj);
        let r = await D.save();

        console.log("result:-", r);
        resolve(r)

    })
}