import Image from "next/image";
import DiscoverOne from "../public/discover-1.png"
import DiscoverTwo from "../public/discover-2.png"
import DiscoverThree from "../public/discover-3.png"

const SellNfts = () => {
  return (
    <div className="grid grid-cols-2 gap-8 w-10/12 mx-auto h-[600px]">
      <div className="flex items-center justify-center">
        <div className="mr-10">
          <div className="mb-10">
            <Image src={DiscoverOne} alt="" height={"250px"} width={"250px"} />
          </div>
          <div className="ml-[100px]">
          <Image src={DiscoverThree} alt="" height={"150px"} width={"150px"} />
          </div>
        </div>
        <div>
          <Image src={DiscoverTwo} alt="" height={"200px"} width={"200px"} />
        </div>
      </div>
      <div className="space-y-6 flex flex-col  justify-center">
        <h5 className="font-extrabold text-2xl w-4/12">
          CREATE AND SELL YOUR NFTS
        </h5>
        <p className="text-sm text-gray-500 w-8/12">
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
