import Image from "next/image";
import React from "react";
import CardTrick from "../public/card-tick-1.png"
import CardSquare from "../public/chart-square-2.png"
 
const Transaction = () => {
  return (
    <div className="bg-[#D9E0EC33] h-[326px] flex flex-col items-center justify-center">
      <div className="w-10/12 mx-auto grid grid-cols-3 gap-4">
      <div>
        <h2 className="text-[28px] font-extrabold w-10/12">THE AMAZING NFT ART OF THE WORLD HERE</h2>
      </div>
      <div className="flex">
        <div className="mr-[12px] mt-2">
        <Image src={CardTrick} alt="" />
        </div>
        <div className="space-y-2">
          <h6 className="text-[20px] font-bold">Fast Transaction</h6>
          <p className="text-sm text-gray-400 w-6/12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
            consequatur.
          </p>
        </div>
      </div>
      {/* card square */}
      <div className="flex">
      <div className="mr-[12px] mt-2">
        <Image src={CardSquare} alt="" />
        </div>
        <div className="space-y-2">
          <h6 className="text-[20px] font-bold">Growth Transaction</h6>
          <p className="text-sm text-gray-400 w-6/12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
            consequatur.
          </p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Transaction;
