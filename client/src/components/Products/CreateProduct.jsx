import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "../common/Header";
import { getStorage } from "firebase/storage";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
const CreateProduct = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [productImageFile, setProductImageFile] = useState(null);
  const [productImageFile1, setProductImageFile1] = useState(null);
  const [productImageFile2, setProductImageFile2] = useState(null);
  const [productImageFile3, setProductImageFile3] = useState(null);
  const navigate = useNavigate();
  console.log(formData);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    formData.userRef = currentUser._id;

    const storage = getStorage();

    if (productImageFile) {
      const productImageRef = ref(
        storage,
        `productImages/${productImageFile.name}`
      );
      await uploadBytes(productImageRef, productImageFile);
      const productImageUrl = await getDownloadURL(productImageRef);
      formData.image1 = productImageUrl;
    }

    if (productImageFile1) {
      const productImageRef = ref(
        storage,
        `productImages/${productImageFile1.name}`
      );
      await uploadBytes(productImageRef, productImageFile1);
      const productImageUrl = await getDownloadURL(productImageRef);
      formData.image2 = productImageUrl;
    }
    if (productImageFile2) {
      const productImageRef = ref(
        storage,
        `productImages/${productImageFile2.name}`
      );
      await uploadBytes(productImageRef, productImageFile2);
      const productImageUrl = await getDownloadURL(productImageRef);
      formData.image3 = productImageUrl;
    }
    if (productImageFile3) {
      const productImageRef = ref(
        storage,
        `productImages/${productImageFile3.name}`
      );
      await uploadBytes(productImageRef, productImageFile3);
      const productImageUrl = await getDownloadURL(productImageRef);
      formData.image4 = productImageUrl;
    }

    try {
      setLoading(true);
      const res = await fetch("/api/product/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);
      setError(null);
      navigate("/");
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  const handleFileChange = (e, setImageFile) => {
    setImageFile(e.target.files[0]);
  };

  const [catagory, setCatagory] = React.useState([]);

  React.useEffect(() => {
    const fetchCatagory = async () => {
      try {
        const response = await fetch("/api/catagory/");
        const data = await response.json();
        setCatagory(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchCatagory();
  }, []);

  return (
    <div>
      <Header />
      <div className="bg-slate-100 ">
        <div className="  flex flex-col justify-between  px-40  p-10  items-center">
          <form
            onSubmit={handleSubmit}
            className=" flex flex-col gap-5 bg-white rounded-lg shadow-md py-6 p-10"
          >
            <div className="flex  justify-between gap-20 ">
              <div className=" w-[50%]">
                <div className="mb-4">
                  <label
                    htmlFor="title"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Product Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    value={formData.title}
                    onChange={handleChange}
                    className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-blue-500 focus:shadow-outline"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="catagory"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Product catagory
                  </label>
                  <select
                    id="catagory"
                    value={formData.catagory}
                    onChange={handleChange}
                    className="  appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-blue-500 focus:shadow-outline"
                  >
                    {catagory.map((catagory) => (
                      <option key={catagory._id} value={catagory.name}>
                        {catagory.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="image1"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Image One
                  </label>
                  <input
                    type="file"
                    id="image1"
                    onChange={(e) => handleFileChange(e, setProductImageFile)}
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-blue-500 focus:shadow-outline"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="image2"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Image Two
                  </label>
                  <input
                    type="file"
                    id="image2"
                    onChange={(e) => handleFileChange(e, setProductImageFile1)}
                    className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-blue-500 focus:shadow-outline"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="image3"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Image Three
                  </label>
                  <input
                    type="file"
                    id="image3"
                    onChange={(e) => handleFileChange(e, setProductImageFile2)}
                    className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-blue-500 focus:shadow-outline"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="image4"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Image Four
                  </label>
                  <input
                    type="file"
                    id="image4"
                    onChange={(e) => handleFileChange(e, setProductImageFile3)}
                    className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-blue-500 focus:shadow-outline"
                    required
                  />
                </div>
                
              </div>
              <div>
                <div className="mb-4">
                  <label
                    htmlFor="description"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Product Description
                  </label>
                  <textarea
                    id="description"
                    value={formData.description}
                    onChange={handleChange}
                    className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-blue-500 focus:shadow-outline"
                    rows="5"
                    required
                  ></textarea>
                </div>

                <div>
                  <label
                    htmlFor="price"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Product Price
                  </label>
                  <input
                    type="number"
                    id="price"
                    value={formData.price}
                    onChange={handleChange}
                    className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-blue-500 focus:shadow-outline"
                    min="0"
                    defaultValue={0}
                    required
                  />
                </div>
                <div className="mb-4">
                <label
                  htmlFor="rating"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Product Rating (optional)
                </label>
                <input
                  type="number"
                  id="rating"
                  value={formData.rating}
                  onChange={handleChange}
                  className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-blue-500 focus:shadow-outline"
                  min="0"
                  max="5"
                  step="0.1"
                />
              </div>

                <button
                className=" mt-14 bg-blue-800 p-4 py-2 text-white rounded-md"
                disabled={loading}
                type="submit"
              >
                {loading ? "Loading..." : "Create Product"}
              </button>
              </div>
             
            
            </div>

            {error && <p className=" text-red-500 mt-5">{error}</p>}
          </form>
        </div>
      </div>
  
    </div>
  );
};

export default CreateProduct;
