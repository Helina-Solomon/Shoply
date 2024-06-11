import express from "express"
import { displayProduct, product } from "../Controller/productController.js";


const productRouter = express.Router();

  productRouter.post("/create", product)
  productRouter.get("/", displayProduct)
 


export default productRouter