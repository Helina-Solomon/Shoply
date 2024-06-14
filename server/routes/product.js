import express from "express"
import { deleteProduct, displayProduct, product, productDetails } from "../Controller/productController.js";


const productRouter = express.Router();

  productRouter.post("/create", product)
  productRouter.get("/", displayProduct)
  productRouter.get ("/productDetails/:id", productDetails)
  productRouter.delete("/deleteProduct/:id", deleteProduct)

export default productRouter