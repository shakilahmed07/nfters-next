import React from "react";

const SellNfts = () => {
  return (
    <div className="grid grid-cols-2 bg-red-300 w-10/12 mx-auto h-[600px] py-10">
      <div>
        images
      </div>
      <div className="space-y-4 flex flex-col  justify-center">
        <h5 className="font-extrabold text-2xl w-4/12">
          CREATE AND SELL YOUR NFTS
        </h5>
        <p className="text-sm text-gray-500 w-6/12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          unde, quae consequuntur ullam quis amet corrupti, sequi vel, esse a
          dolorem sint at saepe repudiandae neque ipsam? Voluptates, impedit
          ipsam?
        </p>
        <button
          type="submit"
          className="bg-[rgb(61,0,183)] text-white rounded-3xl text-sm py-3 font-semibold w-3/12"
        >
          Sign Up Now
        </button>
      </div>
    </div>
  );
};

export default SellNfts;
