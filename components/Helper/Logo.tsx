import React from "react";
import { FaTasks } from "react-icons/fa";

const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      <div className="w-10 bg-red-600 rounded-full flex items-center justify-center flex-col p-2">
        <FaTasks className="w-5 h-5 text-white" />
      </div>
      <h1 className="text-xl block md:text-2xl text-gray-800 font-bold">
        TaskFlow
      </h1>
    </div>
  );
};

export default Logo;
