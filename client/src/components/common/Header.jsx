import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import TelegramIcon from "@mui/icons-material/Telegram";
import PhoneIcon from "@mui/icons-material/Phone";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { SearchRounded } from "@mui/icons-material";
import { Link } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useSelector } from "react-redux";

const catagory = [
  {
    id: "1",
    title: "catagory",
  },
  {
    id: "2",
    title: "catagory",
  },
  {
    id: "3",
    title: "catagory",
  },
  {
    id: "4",
    title: "catagory",
  },
  {
    id: "5",
    title: "catagory",
  },
  {
    id: "6",
    title: "catagory",
  },
];
const Header = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className=" shadow-md ">
      <div className=" bg-blue-900 text-white rounded-t-lg p-2 px-20">
        <div className=" flex  justify-between items-center ">
          <div className=" flex  justify-between items-center gap-10">
            <h1>
              <PhoneIcon />
              +251 985 111 040
            </h1>
            <h1>
              <EmailIcon />
              shoply@gmail.com
            </h1>
          </div>

          <div className=" flex  justify-between items-center gap-7">
            <FacebookIcon />
            <InstagramIcon />
            <TelegramIcon />
            <XIcon />
          </div>
        </div>
      </div>
      <div className=" px-28 p-3 flex justify-between items-center">
        <Link to={"/"}>
          <h1 className=" font-bold text-2xl">
            {" "}
            <LocalMallIcon
              sx={{ fontSize: 50 }}
              className=" text-blue-900 "
            />{" "}
            SHOPLY
          </h1>
        </Link>
        <div className=" flex items-center">
          <input
            type="text"
            placeholder="Search products"
            className=" border w-[300px] p-3 rounded-md px-3 border-black"
          />
          <button className=" p-3 text-white  bg-blue-900">
            <SearchRounded />
          </button>
        </div>
        <div className=" flex justify-between items-center gap-5">
          {!currentUser ? (
            <div className=" flex justify-between items-center gap-5">
              <Link to={"/sign-up"}>
                <h1>REGISTER</h1>
              </Link>
              <Link to={"/sign-in"}>
                <h1>LOGIN</h1>
              </Link>
            </div>
          ) : (
            <div>

              <img src={currentUser.avatar} alt="profile" className=" w-10 rounded-full" />
            </div>
          )}

          <h1>
            <Link to={"/cart"}>
              {" "}
              <ShoppingBagIcon />{" "}
            </Link>
          </h1>
        </div>
      </div>
      <hr />
      <div>
        <div className="  font-semibold flex justify-center text-[15px] items-center gap-28 p-3">
          <Link className=" hover:text-blue-700 focus:text-blue-800" to={"/"}>
            HOME
          </Link>
          <div className=" group">
            <Link className="  hover:text-blue-700 focus:text-blue-800">
              CATAGORIES <KeyboardArrowDownIcon />
            </Link>
            <div className=" absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
              <ul>
                {catagory.map((catagory) => (
                  <li>
                    <a
                      href="/"
                      className="inline-block w-full rounded-md p-2 hover:bg-gray-200"
                    >
                      {catagory.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <Link
            className=" hover:text-blue-700 focus:text-blue-800"
            to={"/products"}
          >
            PRODUCTS
          </Link>
          <Link className=" hover:text-blue-700 focus:text-blue-800">
            ABOUT US
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
