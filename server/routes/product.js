import express from "express"
import { displayProduct, product, productDetails } from "../Controller/productController.js";


const productRouter = express.Router();

  productRouter.post("/create", product)
  productRouter.get("/", displayProduct)
  productRouter.get ("/productDetails/:id", productDetails)


export default productRouter