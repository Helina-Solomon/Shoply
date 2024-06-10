import express from "express"
import { google, signin, signout, signup } from "../Controller/userController.js";

const userRouter = express.Router();

  userRouter.post("/signup", signup)
  userRouter.post("/signin", signin)
  userRouter.post("/google", google);
  userRouter.get("/signout", signout);


export default userRouter