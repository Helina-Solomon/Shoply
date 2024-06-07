import { Reviews, Star } from "@mui/icons-material";
import React from "react";
import img from "../../assets/images/Colorful-heels.jpg";
import im1 from "../../assets/images/black-boot.jpg";
import im2 from "../../assets/images/converse-boot.jpg";
import im3 from "../../assets/images/ladies-2.jpg";
import im4 from "../../assets/images/ladies-boot.jpg";
import im5 from "../../assets/images/ladies-boots.jpg";
import Header from "../common/Header";
import Footer from "../common/Footer";
import { Link } from "react-router-dom";
import Pagination from "@mui/material/Pagination";

const product = [
  {
    id: "1",
    img: img,
    title: "Best Nike shoe for men",
    review: "4",
    price: "234.00",
  },
  {
    id: "2",
    img: im1,
    title: "Best Nike shoe for men",
    review: "4",
    price: "234.00",
  },
  {
    id: "3",
    img: im2,
    title: "Best Nike shoe for men",
    review: "4",
    price: "234.00",
  },
  {
    id: "3",
    img: im3,
    title: "Best Nike shoe for men",
    review: "4",
    price: "234.00",
  },
  {
    id: "4",
    img: im4,
    title: "Best Nike shoe for men",
    review: "4",
    price: "234.00",
  },
  {
    id: "5",
    img: im5,
    title: "Best Nike shoe for men",
    review: "4",
    price: "234.00",
  },
];
const Products = () => {
  return (
    <div className=" ">
      <div>
        <Header />
      </div>
      <div>
        <div className=" grid grid-cols-4 my-10 px-14 gap-10">
          {product.map((product) => (
            <Link to={"/products-details"}>
              <div className=" border p-7 rounded-md">
                <img
                  src={product.img}
                  alt="image"
                  className=" w-[200px] h-[200px]"
                />
                <div className=" text-center text-gray-800 flex flex-col gap-2 pt-4">
                  <h1 className=" text-gray-800 font-bold text-[18px]">
                    {product.title}
                  </h1>
                  <h1>
                    <Star className=" text-yellow-500" />
                    {product.review}
                  </h1>
                  <h1 className=" text-xl font-bold">&#36;{product.price}</h1>
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
