import Product from "../models/Product.js";

export const product = async (req, res, next) => {
  const {
    title,
    image1,
    image2,

    image3,
    image4,
    catagory,
    description,
    price,
    rating,
    userRef,
    createdAt,
    updatedAt, 
  } = req.body;
  const newProduct = new Product({
    title,
    image1,
    image2,
    image3,
    image4,
    catagory,
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

export const displayProduct = async(req, res, next) => {
  try {
    const products = await Product.find()
    res.json(products)
  } catch (error) {
    next(error)
  }
}

export const productDetails = async(req,res, next) => {
  try {
    const products = await Product.findById(req.params.id)
    res.json(products)
  } catch (error) {
    next(error)
  }
}

export const deleteProduct = async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(errorHandler(404, "product not found!"));
  }

  try {
    await Product.findByIdAndDelete(req.params.id);
  } catch (error) {
    next(error);
  }
};


export const updateproducts = async (req, res, next) => {
  const courses = await Product.findById(req.params.id);
  if (!product) {
    return next(errorHandler(404, " Product not found"));
  }
  if (req.user.id !== product.userRef) {
    return next(errorHandler(401, " You can only update your own Product!"));
  }

  try {
    const updateproducts = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json(updateproducts);
  } catch (error) {
    next(error);
  }
};





export const productEdit = async (req, res, next) => {
  const { id } = req.params; 

  try {
    const product = await Product.findById(id); 
    if (!product) {
      return res.status(404).json({ message: "Product not found" }); 
    }
    res.status(200).json(product); 
  } catch (error) {
    console.error("Error fetching Product:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
