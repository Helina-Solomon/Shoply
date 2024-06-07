import React from "react";
import img from "../../assets/images/man-shoe.jpg";
import Header from "../common/Header";
import { ShoppingBag, ShoppingCart } from "@mui/icons-material";
import Footer from "../common/Footer";
const ProductDetails = () => {
  return (
    <div>
        <Header/>
      <div className=" px-28 py-10">
        <div>
          <div className=" flex justify-center gap-10">
            <div>
            <img src={img} alt="image" className=" w-[400px] h-[400px]" />
            <div className=" flex gap-2 mt-2">
            <img src={img} alt="image" className="  w-[130px] h-[120px]" />
            <img src={img} alt="image" className=" w-[130px] h-[120px]" />
            <img src={img} alt="image" className=" w-[125px] h-[120px]" />
            </div>
            </div>
            <div className=" w-[420px]">
              <h1 className=" font-bold text-2xl mb-7">Best Nike shoe for men</h1>
              <hr />
              <h1 className=" font-bold text-lg mb-4">&#36; 240</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <div className=" my-10 flex flex-col gap-4">
                <h1>Price: <span className=" ml-9">&#36; 240</span></h1> 
                <h1>Status <span className=" ml-8">In stack</span></h1> 
                <h1>Reviews<span className=" ml-6">240</span></h1> 
                <h1>Quantity <span className=" ml-5"><input type="number" className=" border-2 border-gray-500" /></span></h1>
                <button className=" w-[50%] text-white bg-black p-3 px-6"><ShoppingBag className=" mr-1"/> ADD TO CART</button> 
              </div>
            </div>
          </div>
          <div className=" p-14">
            <h1 className=" font-bold text-lg">Reviews</h1>
          </div>
        </div>
       
      </div>
      <Footer/>
    </div>
  );
};

export default ProductDetails;
