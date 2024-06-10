import express from "express"
import { google, signin, signup } from "../Controller/userController.js";

const userRouter = express.Router();

  userRouter.post("/signup", signup)
  userRouter.post("/signin", signin)
  userRouter.post("/google", google);

export default userRouter