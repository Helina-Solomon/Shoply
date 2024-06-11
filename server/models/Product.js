import mongoose from "mongoose";


const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
       
    },
    image1: {
        type: String,
        required: true,
   
    },
    image2: {
        type: String,
        required: true,
   
    },
    image3: {
        type: String,
        required: true,
   
    },
    image4: {
        type: String,
        required: true,
   
    },
    description: {
        type: String,
        required: true,  
    },
    price: {
        type: Number,     
    },
    rating: {
        type: String,
    },
    userRef:{
        type: String,
    },
    createdAt: {
        type:Date,
        default:Date.now,
    },
    updatedAt: {
        type:Date,
        default:Date.now,
    },
}, {timestamps: true})

const Product = mongoose.model('Product', productSchema)
export default Product