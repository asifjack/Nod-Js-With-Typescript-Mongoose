import * as express from "express";
import * as user from '../controllers/user'
import { resolveSoa } from "dns";
const router = express.Router();
//   // Get one user
//   router.get("/id",[],
//   async(req:express.Request,res:express.Response,next:express.NextFunction)=>{
//     console.log("in user ");
//     res.send("hello")
//   })
//   //Create a new user
//   router.post("/getAll", []);
// router.get('/hello',[],async(req:express.Request,res:express.Response,next:express.NextFunction)=>{
//   let re=user.getALlUser();
//   res.send(re)
// })

// router.post('/hello',[],async(req:express.Request,res:express.Response,next:express.NextFunction)=>{

//   console.log("from user",req.body.name);

//   res.send("hello:-"+req.body.name)
// })

router.post('/createUser', [], async (req: express.Request, res: express.Response, next: express.NextFunction) => {
  try {
    let data = await user.createUser(req.body) as User.CreateRequest
    // console.log("in api", data);

    res.send(data)
  }
  catch (er) {
    console.log(er);
  }
});
router.get('/getAllUser', [],
  async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
      let Data = await user.getALlUser();
      res.send(Data)
    }
    catch (e) {
      console.log(e);
    }
  })

export { router as user };