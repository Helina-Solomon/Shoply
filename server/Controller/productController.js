import Product from "../models/Product.js";

export const product = async (req, res, next) => {
  const {
    title,
    image,
    description,
    price,
    rating,
    userRef,
    createdAt,
    updatedAt, 
  } = req.body;
  const newProduct = new Product({
    title,
    image,
    description,
    price,
    rating,
    userRef,
    createdAt,
    updatedAt,
  });
  try {
    await newProduct.save();
    res.status(201).json("Product created successfull");
  } catch (error) {
    next(error);
  }
};
