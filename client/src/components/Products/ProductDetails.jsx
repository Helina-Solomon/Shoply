import React, { useState } from "react";
import Header from "../common/Header";
import { ShoppingBag, ShoppingCart } from "@mui/icons-material";
import Footer from "../common/Footer";
const ProductDetails = () => {
  const [products, setProducts] = useState([]);
  console.log(products);

  React.useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch("/api/product/");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProduct();
  }, [products]);

  return (
    <div>
      <Header />
      <div className=" px-28 py-10">
        <div>
          <div className=" flex flex-col justify-center items-center gap-10">
            {products &&
              products.map((products) => (
                <div key={products._id} className=" flex gap-10 ">
                  <div>
                    <img
                      src={products.image1}
                      alt="image"
                      className=" w-[400px] h-[400px]"
                    />
                    <div className=" flex gap-2 mt-2">
                      <img
                        src={products.image2}
                        alt="image"
                        className="  w-[130px] h-[120px]"
                      />
                      <img
                        src={products.image3}
                        alt="image"
                        className=" w-[130px] h-[120px]"
                      />
                      <img
                        src={products.image4}
                        alt="image"
                        className=" w-[125px] h-[120px]"
                      />
                    </div>
                  </div>
                  <div className=" w-[420px]">
                    <h1 className=" font-bold text-2xl mb-7">
                      {products.title}
                    </h1>
                    <hr />
                    <h1 className=" font-bold text-lg mb-4">&#36; 240</h1>
                    <p>{products.description}</p>
                    <div className=" my-10 flex flex-col gap-4">
                      <h1>
                        Price:{" "}
                        <span className=" ml-9">&#36; {products.price}</span>
                      </h1>
                      {/* <h1>
                  Status <span className=" ml-8">In stack</span>
                </h1> */}
                      <h1>
                        Reviews<span className=" ml-6">{products.rating}</span>
                      </h1>
                    </div>
                  </div>
                </div>
              ))}
            <div className=" flex flex-col justify-center items-center gap-5">
              <h1>
                Quantity{" "}
                <span className=" ml-5">
                  <input type="number" className=" border-2 border-gray-500" />
                </span>
              </h1>
              <button className=" w-[100%] text-white bg-black p-3 px-6">
                <ShoppingBag className=" mr-1" /> ADD TO CART
              </button>
            </div>
          </div>
          <div className=" p-14">
            <h1 className=" font-bold text-lg">Reviews</h1>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetails;
