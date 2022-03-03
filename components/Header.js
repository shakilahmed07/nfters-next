import Image from "next/image";
import React from "react";
import NFters from "../public/NFters.png";

const Header = () => {
  return (
    <div className="flex items-center justify-between  h-[70px] w-10/12 mx-auto sticky top-0 bg-white">
      <Image src={NFters} alt="" />
      <div>
        <ul className="flex">
          <li className="mr-4 text-sm font-semibold">Marketplace</li>
          <li className="mr-4 text-sm font-semibold">Resource</li>
          <li className="text-sm font-semibold">About</li>
        </ul>
      </div>
      <div>
        <input type="text" placeholder="Search" className="pl-4 rounded-3xl px-10 py-[2px] placeholder:text-gray-300 border-2 outline-none" />
      </div>
      <div className="flex items-center justify-center">
        <button className="bg-[rgb(61,0,183)] text-white rounded-3xl mr-8 text-sm px-8 py-[7px] font-semibold">Upload</button>
        <button className="border-[rgb(61,0,183)] border-2 rounded-3xl text-[rgb(61,0,183)] text-sm py-1 px-6 font-semibold">Connect Wallet</button>
      </div>
    </div>
  );
};

export default Header;
