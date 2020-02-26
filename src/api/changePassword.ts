import * as express from "express";
import * as user from '../controllers/user';
// import * as Login from '../controllers/userLogin';
import * as changePassword from '../controllers/changePassword'
const router = express.Router();

router.post('/changePassword', [], async (req: express.Request, res: express.Response, next: express.NextFunction) => {
  try {
    let input=req.body;
    let token:any=req.headers.token;

    let re = await changePassword.changePassword(input,token) as User.ChangePasswordRequest;
    res.send(re);
  }
  catch (er) {
    console.log(er);
  }
});

export { router as change}
