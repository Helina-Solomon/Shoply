import Cart from "../models/Cart.js";
export const cart = async (req, res, next) => {
    const {
      
      userRef,
      title,
      image1,
      price,
      quantity,
    } = req.body;
    const newCart = new Cart({
        userRef,
      title,
      image1,
      price,
      quantity,
    });
    try {
      await newCart.save();
      res.status(201).json("Cart created successfull");
    } catch (error) {
      next(error);
    }
  };

export const displayCart = async(req, res, next) => {
    try {
      const cart = await Cart.find({userRef: req.params.id})
      res.json(cart)
    } catch (error) {
      next(error)
    }
  }