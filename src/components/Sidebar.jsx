import React from "react";
import { assets } from "../assets/assets";

const Sidebar = () => {
  return (
    <div className="w-[25%] h-full p-2 flex-col gap-2 text-white hidden 1g:flex">
      <div className="bg-white h-[15%] rounded flex flex-col justify-around">
        <div className="flex items-center gap-3 p1-8 cursor-pointer">
          <img className="w-6" src={assets.home_icon} alt="home_icon" />
          <p className="font-bold">Home</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
