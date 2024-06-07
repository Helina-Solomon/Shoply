import React, {useState, useEffect} from "react";

import Menu from "../Home/MenuData";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PrintIcon from "@mui/icons-material/Print";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import TelegramIcon from "@mui/icons-material/Telegram";

const SocialMedia = [
  {
    id: 1,
    name: <FacebookIcon />,
    link: "/#",
  },
  {
    id: 2,
    name:<InstagramIcon />,
    link: "/#",
  },
  {
    id: 3,
    name: <XIcon />,
    link: "/#",
  },
  {
    id: 4,
    name: <TelegramIcon />,
    link: "/#",
  },
];

const Footer = () => {
    const date = new Date().getFullYear();
  return (
    <div className="bg-blue-950 w-full text-white flex flex-col justify-between items-center p-8 gap-3">
      <div className=" pb-2  sm:flex justify-between pt-6  gap-20 text-white">
        

        <div className="">
          <h1 className=" mb-8 text-2xl font-bold hover:text-blue-500">
            Contact Info
          </h1>
          <div>
            <p>
              <LocationOnIcon className=" mr-3 mb-4" /> CMC Michael, Addis
              Ababa, Ethiopia
            </p>
            <p>
              <LocalPhoneIcon className=" mr-3 mb-4" /> Tel.:+251-975364420
            </p>
            <p>
              <EmailIcon className=" mr-3 mb-4" /> contactshoply@gmail.com
            </p>
            <p className=" flex gap-4">
              
              {
                SocialMedia.map((data)=> (
                  <Link key={data.id} className="hover:text-purple-500">
                  {data.name}
                </Link>
                ))
              }
              
            </p>
          </div>
        </div>
      </div>
      <div className=" pb-6 mb-0 text-center">
        Copyright &copy; {date} Shoply. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
