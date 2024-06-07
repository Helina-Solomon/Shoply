import React from "react";
import Header from "../common/Header";
import { Link } from "react-router-dom";
//mongodb+srv://solomonhelina78:12348109@e-commerce.vm5aylr.mongodb.net/?retryWrites=true&w=majority&appName=e-commerce
const SignIn = () => {
  return (
    <div className="h-screen">
      <Header />
      <div>
        <div className=" flex justify-center items-center  mt-14 ">
          <form
            action=""
            className=" flex flex-col gap-7 w-[400px] shadow-xl  p-10"
          >
            <input
              type="text"
              placeholder="Username"
              className=" border p-3 rounded-sm border-slate-300"
            />
            <input
              type="password"
              placeholder=" password"
              className=" border p-3 rounded-sm border-slate-300"
            />
            <button className=" bg-blue-800 p-2 text-white rounded-md">
              Sign In
            </button>
            <div className=" flex gap-2">
              <p>Don't have an account?</p>
              <Link to={"/sign-up"} className=" text-blue-800 font-semibold">
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
