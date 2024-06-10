import React, {useState,useEffect} from "react";
import Header from "../common/Header";
import { Link, useNavigate } from "react-router-dom";
import Google from "./Google";

const SignUp = () => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
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
      setLoading(true);
      const res = await fetch('/api/user/signup', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
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
      navigate("/sign-in");
    } catch (error) {
      setLoading(false);
      setError(" error" ,error.message);
    }
  };

  return (
    <div className="h-screen">
      <Header />
      <div>
        <div className=" flex justify-center items-center  mt-14 ">
          <form
            action=""
            onSubmit={handleSubmit}
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
              type="email"
              placeholder=" Email"
              id="email"
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
              {loading ? "Loading..." : "Register"} 
            </button>
            <Google/>
            <div className=" flex gap-2">
              <p>Already have an account?</p>
              <Link to={"/sign-in"} className=" text-blue-800 font-semibold">
                Sign In
              </Link>
            </div>
            {error && <p className=" text-red-500 mt-5">{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
