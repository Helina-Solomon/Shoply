import React from "react";
import Header from "../common/Header";
import im4 from "../../assets/images/ladies-boot.jpg";
import im5 from "../../assets/images/ladies-boots.jpg";
import Footer from "../common/Footer";
const cart = [
  {
    id: "1",
    title:"Best Nike shoe for men",
    img: im4,
    quantity: "5",
    price: "234",
  },
  {
    id: "2",
    title:"Best Nike shoe for men",
    img: im5,
    quantity: "3",
    price: "340",
  },
];
const Cart = () => {
  return (
    <div>
      <div>
        <Header />
        <div>
          <div>
            <h1 className=" bg-blue-900 text-white text-center p-4 font-bold text-lg">Total Cart Products(no)</h1>
            <div className=" my-10 flex flex-col gap-10 ">
              {cart.map((cart) => (
                <div className=" flex  justify-between   items-center px-20 py-10 mx-20 shadow-lg ">
                  <img src={cart.img} className=" h-[200px] w-[200px] py-5" alt="imag" />
                  <h1 className=" font-bold text-lg">{cart.title}</h1>
                  <h1>Quantity: {cart.quantity}</h1>
                  <h1>Price: {cart.price}</h1>
                </div>
              ))} 
            </div> 
          </div>
          <div className=" px-28 items-end my-5">
            <h1 className=" justify-end">Total: </h1>
          </div>
          <div className=" flex justify-between items-center px-40 p-7 ">
            <button className=" bg-black text-white  p-2 px-10">CONTINUE TO SHOPPING</button>
            <button className=" bg-blue-900 text-white p-2  px-10">CHECKOUT</button>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Cart;
