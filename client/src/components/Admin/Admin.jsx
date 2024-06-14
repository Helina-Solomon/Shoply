import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import HomeIcon from "@mui/icons-material/Home";
import MessageIcon from "@mui/icons-material/Message";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import WorkspacesIcon from "@mui/icons-material/Workspaces";
import GroupIcon from "@mui/icons-material/Group";


import { Link } from "react-router-dom";
import SignOut from "../Authentication/SignOut";
import DashboardHeader from "./Header";
import ShoppingBag from "@mui/icons-material/ShoppingBag";
import { Logout } from "@mui/icons-material";
import Products from "./Products";
import Catagory from "./Catagory";
import Users from "./Users";



const navigationItems = [
  { name: "Dashboard", icon: <HomeIcon />, isActive: true }, // Set active item initially
  { name: "Products", icon: <PlayCircleIcon /> },
  { name: "Categories", icon: <WorkspacesIcon /> },
  { name: "Messages", icon: <MessageIcon /> },
  { name: "Users", icon: <GroupIcon /> },
  

];


const Admin = () => {
  const [activeItem, setActiveItem] = useState(0); 

  const handleClick = (index) => {
    setActiveItem(index);
  };

  var condtion = "";
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="   bg-gray-100 pb-12 min-h-screen ">
      <div>
        <div>
          <DashboardHeader/>
          <div className=" bg-white h-screen fixed w-[230px] top-0 p-5 text-center flex flex-col gap-4">
            <div className="font-bold  text-blue-800 leading-10  text-lg">
              <Link to={'/'}>
                <ShoppingBag className="text-blue-800 mb-2" />{" "}
                Shoply 
              </Link>
            </div>
            <div className=" text-start flex p-2 flex-col gap-2">
              {navigationItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => handleClick(index)}
                  className={`
            bg-blue-800 flex gap-3 text-sm  cursor-pointer   py-2 px-3 rounded-md
            ${
              index === activeItem
                ? `text-white ${(condtion = item.name)} `
                : `bg-white  text-gray-500 hover:bg-gray-200`
            } 
          `}
                >
                  {item.icon}
                  {item.name}
                </button>
              ))}
              <div className=" flex  pl-3 gap-1"><Logout/><SignOut/></div>
              
            </div>
          </div>
        </div>
      </div>
      {condtion == "Dashboard" ? (
        <div>home</div>
      ) : condtion == "Products" ? (
        <Products/>
      ) : condtion == "Categories" ? (
        <Catagory/>
      ) : condtion == "Messages" ? (
        <div>home</div>
      ) : condtion == "Users" ? (
        <Users/>
      )   : condtion == "Log Out" ? (
        <SignOut />
      ) : (
        ""
      )}
    </div>
  );
};

export default Admin;