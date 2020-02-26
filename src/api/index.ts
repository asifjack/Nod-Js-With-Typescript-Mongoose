import { Router } from "express";

import { user } from "./user";
import { login } from './userLogin';
import { change } from './changePassword';

// import { user } from "./user";

const routes = Router();

routes.use("/user", user);
routes.use("/login", login)
routes.use("/change", change)

export { user as user };
export { login as login }
export { change as change }