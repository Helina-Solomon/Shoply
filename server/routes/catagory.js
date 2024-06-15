import express from "express"

import { catagory, catagoryEdit, deleteCatagory, displayCatagory, updatecatagory } from "../Controller/catagoryController.js";

const catagoryRouter = express.Router();

catagoryRouter.post("/create", catagory)
catagoryRouter.get("/", displayCatagory)
catagoryRouter.delete("/deletecatagory/:id", deleteCatagory)
catagoryRouter.post("/updatecatagory/:id", updatecatagory);
catagoryRouter.get("/:id", catagoryEdit);

export default catagoryRouter