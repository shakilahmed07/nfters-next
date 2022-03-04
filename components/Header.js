import Image from "next/image";
import React from "react";
import NFters from "../public/NFters.png";

const Header = () => {
  return (
    // Navbar section
    <header className="h-[70px] sticky top-0 bg-white z-10 flex items-center justify-center border-b-2 border-gray-100">
      <div className="flex items-center justify-between w-10/12 mx-auto cursor-pointer">
        <Image src={NFters} alt="" />
        <div>
          <ul className="flex space-x-8">
            <li className="text-sm font-semibold cursor-pointer">
              Marketplace
            </li>
            <li className="text-sm font-semibold cursor-pointer">Resource</li>
            <li className="text-sm font-semibold cursor-pointer">About</li>
          </ul>
        </div>

        {/* search & connect wallet */}
        <div className="hidden md:inline">
          <input
            type="text"
            placeholder="Search"
            className="pl-4 rounded-3xl px-10 py-[2px] placeholder:text-gray-300 border-2 outline-none"
          />
        </div>
        <div className="flex items-center justify-center">
          <button className="bg-[rgb(61,0,183)] text-white rounded-3xl mr-8 text-sm px-8 py-[7px] font-semibold hover:bg-[rgba(61,0,183,0.88)]">
            Upload
          </button>
          <button className="border-[rgb(61,0,183)] border-2 rounded-3xl text-[rgb(61,0,183)] text-sm py-1 px-6 font-semibold">
            Connect Wallet
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
