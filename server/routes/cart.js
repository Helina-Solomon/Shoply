import express from "express"

import { cart, displayCart } from "../Controller/cartController.js";

const cartRouter = express.Router();

cartRouter.post("/create", cart)
cartRouter.get("/:id", displayCart)
 


export default cartRouter