import express from "express"
import { product } from "../Controller/productController.js";


const productRouter = express.Router();

  productRouter.post("/create", product)
 


export default productRouter