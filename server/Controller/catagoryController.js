import Catagory from "../models/Catagory.js";
export const catagory = async (req, res, next) => {
    const {
      
      userRef,
      name,
    } = req.body;
    const newCatagory = new Catagory({
        userRef,
        name,
    });
    try {
      await newCatagory.save();
      res.status(201).json("Catagory created successfull");
    } catch (error) {
      next(error);
    }
  };

export const displayCatagory = async(req, res, next) => {
    try {
      const catagory = await Catagory.find()
      res.json(catagory)
    } catch (error) {
      next(error)
    }
  }
  export const catagoryEdit = async(req, res, next) => {
    try {
      const catagory = await Catagory.findById(req.params.id)
      res.json(catagory)
    } catch (error) {
      next(error)
    }
  }
  export const deleteCatagory = async (req, res, next) => {
    const catagory = await Catagory.findById(req.params.id);
  
    if (!catagory) {
      return next(errorHandler(404, "catagory not found!"));
    }
  
    try {
      await Catagory.findByIdAndDelete(req.params.id);
    } catch (error) {
      next(error);
    }
  };

  export const updatecatagory = async (req, res, next) => {
    const catagory = await Catagory.findById(req.params.id);
    if (!catagory) {
      return next(errorHandler(404, " Catagory not found"));
    }
  
  
    try {
      const updatedCatagory = await Catagory.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
  
      res.status(200).json(updatedCatagory);
    } catch (error) {
      next(error);
    }
  };