var mongoose = require("mongoose");
import * as express from "express";
import * as bodyParser from "body-parser";
import * as config from "./init/config";
import { user } from "./api";
import { login } from "./api";
import { change } from "./api";

let app: express.Application = express.default();
app.use(bodyParser.json());

let apiRoutes = express.Router();
app.use("/api",apiRoutes);
app.use("/user",user);
app.use("/login",login);
app.use("/change",change);
app.get("/hello",async (req: express.Request,res: express.Response,next: express.NextFunction) => 
{
    console.log("from main index");
    res.send("hello");
});
app.listen(5000, () => 
{
  console.log("server running on port 5000");
});

// let url = "mongodb+srv://username:userpass@cluster0-fcf8r.mongodb.net/userDb?retryWrites=true&w=majority";
let url = config.serverConfig.database.uri;

mongoose.connect(url, function(err: any, db: any) 
{
  if (err) 
  {
    console.log("not connected");
  }
  console.log("Database created!");
});
