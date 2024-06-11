import express from "express"

import { catagory, displayCatagory } from "../Controller/catagoryController.js";

const catagoryRouter = express.Router();

catagoryRouter.post("/create", catagory)
catagoryRouter.get("/", displayCatagory)
 


export default catagoryRouter