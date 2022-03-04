import Image from "next/image";
import React from "react";
import CardTrick from "../public/card-tick-1.png"
import CardSquare from "../public/chart-square-2.png"
 
const Transaction = () => {
  return (
    <div className="sm:bg-[#D9E0EC33] sm:h-[326px] flex flex-col items-center justify-center">
      <div className="w-10/12 mx-auto grid sm:grid-cols-3 gap-4">
      <div>
        <h2 className="sm:text-[28px] font-extrabold w-10/12">THE AMAZING NFT ART OF THE WORLD HERE</h2>
      </div>
      <div className="flex">
        <div className="mr-[12px] mt-2">
        <Image src={CardTrick} alt="" />
        </div>
        <div className="space-y-2">
          <h6 className="text-[20px] font-bold">Fast Transaction</h6>
          <p className="text-sm text-gray-400 w-6/12">
          Tellus Semper Quam Quam Tristique Hac Primis Curabitur Pretium Sapien
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
          Fringilla Quam Dolor Vestibulum Aptent Aenean Pulvinar Sodales Vitae Scelerisque
          </p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Transaction;
