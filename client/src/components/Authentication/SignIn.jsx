import React, {useState,useEffect} from "react";
import Header from "../common/Header";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { signInFailure, signInStart,signInSuccess } from "../../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";

//mongodb+srv://solomonhelina78:12348109@e-commerce.vm5aylr.mongodb.net/?retryWrites=true&w=majority&appName=e-commerce
const SignIn = () => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch()
 const navigate = useNavigate();
 console.log(formData)
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart())
      const res = await fetch('/api/user/signin', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(signInFailure(data.message))
        return;
      }
      dispatch(signInSuccess(data))
      navigate("/");
    } catch (error) {
      dispatch(signInFailure(error.message))
    }
  };
  return (
    <div className="h-screen">
      <Header />
      <div>
        <div className=" flex justify-center items-center  mt-14 ">
          <form
           onSubmit={handleSubmit}
            action=""
            className=" flex flex-col gap-7 w-[400px] shadow-xl  p-10"
          >
            <input
              type="text"
              placeholder="Username"
              id="username"
              required
              onChange={handleChange}
              className=" border p-3 rounded-sm border-slate-300"
            />
            <input
              type="password"
              placeholder=" password"
              id="password"
              required
              onChange={handleChange}
              className=" border p-3 rounded-sm border-slate-300"
            />
           <button
            disabled={loading}
              type="submit"
              className=" bg-blue-800 p-2 text-white rounded-md"
            >
              {loading ? "Loading..." : "Sign In"} 
            </button>
            <div className=" flex gap-2">
              <p>Don't have an account?</p>
              <Link to={"/sign-up"} className=" text-blue-800 font-semibold">
                Sign Up
              </Link>
            </div>
            {error && <p className=" text-red-500 mt-5">{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
