import express from "express"

import { catagory, deleteCatagory, displayCatagory } from "../Controller/catagoryController.js";

const catagoryRouter = express.Router();

catagoryRouter.post("/create", catagory)
catagoryRouter.get("/", displayCatagory)
catagoryRouter.delete("/deletecatagory/:id", deleteCatagory)
 


export default catagoryRouter