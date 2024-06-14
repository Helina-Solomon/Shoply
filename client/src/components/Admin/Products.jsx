import { Star } from "@mui/icons-material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
const Products = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(true);

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

  const handleDeleteProduct = async (productId) => {
    try {
      const response = await fetch(`/api/product/deleteProduct/${productId}`, {
        method: "DELETE",
      });
      const data = await response.json();
      if (data.success) {
        setProducts([
          ...products.filter((products) => products._id !== productId),
        ]);
      } else {
        setError("Error deleting product");
      }
    } catch (err) {
      console.error(err);
      setError("Error deleting course");
    }
  };

  return (
    <div className="p-10 pl-52">
      <div>
        
        <div className=" grid grid-cols-4 my-10 px-14 gap-10">
          {products.map((products) => (
            <Link key={products._id} >
              <div className=" border p-7 bg-white rounded-md">
                <img
                  src={products.image1}
                  alt="image"
                  className=" w-full h-[200px]"
                />
                <div className="  text-gray-800 flex flex-col gap-2 pt-4">
                  <h1 className=" text-gray-800 font-bold text-[18px]">
                    {products.title}
                  </h1>
                  <div className=" flex justify-between items-center">
                    <h1 className=" text-xl font-bold">
                      &#36;{products.price}
                    </h1>
                    <h1>
                      <Star className=" text-yellow-500" />
                      {products.rating}
                    </h1>
                  </div>
                  <div className=" flex justify-between items-center">
                    <Link to={`/products-details/${products._id}`}>
                      Details
                    </Link>
                    <Link to={`/edit/${products._id}`}>Edit</Link>

                    <button onClick={() => handleDeleteProduct(products._id)}>
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div><Link to={'/create-product'} className=" ml-16 bg-blue-800 text-white p-2 font-semibold px-3  ">
           ADD Product
        </Link></div>
      </div>
    </div>
  );
};

export default Products;
