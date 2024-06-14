import React, { useState, useEffect } from "react";
import Header from "../common/Header";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Footer from "../common/Footer";

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const { currentUser } = useSelector((state) => state.user);
  const [formData, setFormData] = useState({ quantity: 1 });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { productId } = useParams();
  const navigate = useNavigate();
  console.log(formData);


  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`/api/product/productDetails/${productId}`);
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProduct();
  }, [productId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("handleSubmit triggered"); // Debugging line

    if (!currentUser || !product) {
      console.error("Missing currentUser or product");
      return;
    }

    console.log("currentUser:", currentUser);
    console.log("product:", product);

    try {
      setLoading(true);
      const res = await fetch("/api/cart/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          title: product.title,
          image1: product.image1,
          price: product.price,
          userRef: currentUser._id,
        }),
      });

      const data = await res.json();
      console.log("Response data:", data); // Debugging line
      if (!data.success) {
        setLoading(false);
        setError(data.message);
        return;
      }
      
      setLoading(false);
      setError(null);
      navigate("/cart");
    } catch (error) {
      setLoading(false);
      setError(error.message);
      console.error("Fetch error:", error); // Debugging line
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <div>
      <Header />
      <div className="px-28 py-10">
        <div>
          <div className="flex flex-col justify-center items-center gap-10">
            {product ? (
              
              <div key={product._id} className="flex gap-10">
                <div>
                  <img
                    src={product.image1}
                    alt="image"
                    className="w-[400px] h-[400px]"
                  />
                  <div className="flex gap-2 mt-2">
                    <img
                      src={product.image2}
                      alt="image"
                      className="w-[130px] h-[120px]"
                    />
                    <img
                      src={product.image3}
                      alt="image"
                      className="w-[130px] h-[120px]"
                    />
                    <img
                      src={product.image4}
                      alt="image"
                      className="w-[125px] h-[120px]"
                    />
                  </div>
                </div>
                <div className="w-[420px]">
                  <h1 className="font-bold text-2xl mb-7">{product.title}</h1>
                  <hr />
                  <h1 className="font-bold text-lg mb-4">
                    &#36; {product.price}
                  </h1>
                  <p>{product.description}</p>
                  <div className="my-10 flex flex-col gap-4">
                    <h1>
                      Price: <span className="ml-9">&#36; {product.price}</span>
                    </h1>
                    <h1>
                      Reviews<span className="ml-6">{product.rating}</span>
                    </h1>
                  </div>
                </div>
              </div>
            ) : (
              <div>Product not found</div>
            )}
            <div className="flex flex-col justify-center items-center gap-5">
             
                <h1>
                  Quantity{" "}
                  <span className="ml-5">
                    <input
                      onChange={handleChange}
                      id="quantity"
                      type="number"
                      value={formData.quantity}
                      className="border-2 border-gray-500"
                      min="1"
                    />
                  </span>
                </h1>
                {
                  currentUser? (
                    <button
                 disabled = {loading}
                  onClick={handleSubmit}
                  className="w-[100%] text-white bg-black p-3 px-6"
                >
                 {loading? "loading.... " : ` ADD TO CART` } 
                </button>
             
                  ): (
                    <button
                 disabled = {loading}
                  onClick={() => navigate('/sign-in')}
                  className="w-[100%] text-white bg-black p-3 px-6"
                >
                 {loading? "loading.... " : ` ADD TO CART` } 
                </button>
             
                  )
                }
                
            </div>
          </div>
          <div className="p-14">
            <h1 className="font-bold text-lg">Reviews</h1>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetails;
