import mongoose from "mongoose";


const cartSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
       
    },
    image1: {
        type: String,
        required: true,
   
    },
    price: {
        type: Number,     
    },
    quantity: {
        type: Number,
    },
    
    userRef: {
        type: String,
        required: true,
      
    },
    
}, {timestamps: true})

const Cart = mongoose.model('Cart', cartSchema)
export default Cart