import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {  SearchOutlined } from "@mui/icons-material";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";


const DashboardHeader = () => {
  const { currentUser } = useSelector((state) => state.user);
 

  return (
    <div className="bg-blue-800 p-6 py-2 fixed top-0 left-0 w-full ">
      <div className="bg-white ml-[230px] flex justify-between items-center py-2 px-10">
        <div className="font-bold flex gap-1">
          <CalendarViewDayIcon />
          <h1 className="opacity-70">
            Hello <span>{currentUser.username}</span>
            <span className="px-2 py-1">
              <EmojiPeopleIcon className="text-yellow-500" />
            </span>
          </h1>
        </div>

        <div className="flex items-center">
          <button className="p-1 px-2 bg-blue-800 text-white">
            <SearchOutlined />
          </button>
          <input
            type="text"
            placeholder="Search here"
            className="px-2 py-1.5 bg-gray-100 border-gray-400"
          />
        </div>
        <div className={ `${currentUser.role == "instructor" ? "hidden" : currentUser.role == "student" ? "hidden" : "flex" } gap-16 flex justify-between items-center`}>
          

          <Link >
            <img
              src={currentUser.avatar}
              alt="profile"
              className="h-8 w-8 rounded-md"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;