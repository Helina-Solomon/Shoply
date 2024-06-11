import { Reviews, Star } from "@mui/icons-material";
import React, { useState } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);

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
    <div className=" ">
      <div>
        <Header />
      </div>
      <div>
        <div className=" grid grid-cols-4 my-10 px-14 gap-10">
          {products.map((products) => (
            <Link key={products._id} to={"/products-details"}>
              <div className=" border p-7 rounded-md">
                <img
                  src={products.image1}
                  alt="image"
                  className=" w-full h-[200px]"
                />
                <div className=" text-center text-gray-800 flex flex-col gap-2 pt-4">
                  <h1 className=" text-gray-800 font-bold text-[18px]">
                    {products.title}
                  </h1>
                  <h1>
                    <Star className=" text-yellow-500" />
                    {products.rating}
                  </h1>
                  <h1 className=" text-xl font-bold">&#36;{products.price}</h1>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Products;
