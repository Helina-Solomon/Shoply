import express from "express";
import {
  deleteUser,
  google,
  signin,
  signout,
  signup,
  updateAdmin,
  users,
} from "../Controller/userController.js";

const userRouter = express.Router();

userRouter.post("/signup", signup);
userRouter.post("/signin", signin);
userRouter.post("/google", google);
userRouter.get("/signout", signout);
userRouter.get("/users", users);
userRouter.post("/update", updateAdmin);
userRouter.delete("/delete/:id", deleteUser);

export default userRouter;
