import React from "react";
import Header from "../common/Header";
import { Link } from "react-router-dom";

const SignUp = () => {
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
              id="username"
              required
             
              className=" border p-3 rounded-sm border-slate-300"
            />
            <input
              type="email"
              placeholder=" Email"
              id="email"
              required
              
              className=" border p-3 rounded-sm border-slate-300"
            />
            <input
              type="password"
              placeholder=" password"
              id="password"
              
              
              className=" border p-3 rounded-sm border-slate-300"
            />
            <button
              type="submit"
              className=" bg-blue-800 p-2 text-white rounded-md"
            >
              Register
            </button>
            <div className=" flex gap-2">
              <p>Already have an account?</p>
              <Link to={"/sign-in"} className=" text-blue-800 font-semibold">
                Sign In
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
