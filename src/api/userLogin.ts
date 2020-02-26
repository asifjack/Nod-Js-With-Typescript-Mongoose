import * as express from "express";
const deviceType = require('device-type');
import * as Login from '../controllers/userLogin';
const router = express.Router();

router.post('/createUser', async (req: express.Request, res: express.Response, next: express.NextFunction) => 
{
  try 
  {
    // console.log("ip address",(req as any).ipAddress);
    let ip: any = req.header('x-forwarded-for') || req.connection.remoteAddress;
    // console.log(ip);
    let data = await Login.createLogin(req.body);
    res.send(data)
  }
  catch (er) 
  {
    console.log(er);
  }
});

router.post('/login',async (req: express.Request, res: express.Response, next: express.NextFunction) => 
{
  try 
  {
    // let ip=(req as any).ipAddress;
    // console.log("ip address",(req as any).ipAddress);
    // console.log("device",(deviceType(req));
    // let deviceName=(req as any).device.name;
    // let ip:any= req.header('x-forwarded-for') || req.connection.remoteAddress;
    // console.log("ipppppppppppppp",ip);
    let token = req.headers.token;
    // console.log("result:-",token,req.body);
    let data = await Login.userLogin(req.body, token) as User.CreateRequest
    res.send(data)
  }
  catch (er) 
  {
    console.log(er);
  }
});
export { router as login }
