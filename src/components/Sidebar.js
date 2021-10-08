import React from "react";
import { LightningBoltIcon } from "@heroicons/react/outline";

const Sidebar = () => {
  return (
    <div className="bg-gray-800 h-screen w-24 p-3  flex-col hidden sm:flex">
      <div className="bg-gray-700 rounded-lg p-2 text-center shadow-md cursor-pointer">
        <LightningBoltIcon className="text-pink-600 animate-bounce" />
      </div>
      <p className="text-sm inline-block mt-auto text-pink-600 font-bold">
        &#128525;{" "}
        <a href="https://github.com/ngaboindev">
          <a href="https://github.com/ngaboindev">Robert</a>
        </a>
      </p>
    </div>
  );
};

export default Sidebar;
