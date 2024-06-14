import React, { useEffect, useState } from "react";
import Header from "../common/Header";
import im4 from "../../assets/images/ladies-boot.jpg";
import im5 from "../../assets/images/ladies-boots.jpg";
import Footer from "../common/Footer";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [cart, setCart] = useState(null);
  const { currentUser } = useSelector((state) => state.user);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`/api/cart/${currentUser._id}`);
        const data = await res.json();
        setCart(data);
        calculateTotalPrice(data); // Call calculateTotalPrice on cart update
      } catch (error) {
        console.error(error);
      }
    };
    fetchProduct();
  }, [cart]);

  const calculateTotalPrice = (cartItems) => {
    if (!cartItems) return; // Handle empty cart

    let total = 0;
    cartItems.forEach((item) => {
      total += item.quantity * item.price;
    });
    setTotalPrice(total);
  };

  return (
    <div>
      <div>
        <Header />
        <div>
          <div>
            <h1 className=" bg-blue-900 text-white text-center p-4 font-bold text-lg">
              Total Cart Products({cart ? (<span>{cart.length}</span>) : (<div>no</div>)})
            </h1>
            <div className=" my-10 flex flex-col gap-10 ">
              {cart ? (
                <div>
                  {cart.map((cart) => (
                    <div key={cart._id} className=" flex justify-between items-center px-20 py-10 mx-20 shadow-lg ">
                      <img src={cart.image1} className=" h-[200px] w-[200px] py-5" alt="imag" />
                      <h1 className=" font-bold text-lg">{cart.title}</h1>
                      <h1>Quantity: {cart.quantity}</h1>
                      <h1>Price: {cart.price}</h1>
                    </div>
                  ))}
                </div>
              ) : (
                <div>Cart not found</div>
              )}
            </div>
          </div>
          <div className=" px-28 items-end my-5">
            <h1 className=" justify-end">Total: &#36;{totalPrice.toFixed(2)}</h1> {/* Display formatted total price */}
          </div>
          <div className=" flex justify-between items-center px-40 p-7 ">
            <Link to={"/products"} className=" bg-black text-white  p-2 px-10">CONTINUE TO SHOPPING</Link>
            <button className=" bg-blue-900 text-white p-2  px-10">CHECKOUT</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
