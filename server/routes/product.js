import express from "express"
import { deleteProduct, displayProduct, product, productDetails, productEdit, updateproducts } from "../Controller/productController.js";


const productRouter = express.Router();

  productRouter.post("/create", product)
  productRouter.get("/", displayProduct)
  productRouter.get ("/productDetails/:id", productDetails)
  productRouter.delete("/deleteProduct/:id", deleteProduct)

  productRouter.post("/updateproducts/:id",updateproducts);

  productRouter.get("/productEdit/:id", productEdit);
export default productRouter