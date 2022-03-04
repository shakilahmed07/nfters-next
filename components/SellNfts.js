import Image from "next/image";
import DiscoverOne from "../public/discover-1.png"
import DiscoverTwo from "../public/discover-2.png"
import DiscoverThree from "../public/discover-3.png"
import AvatarTwo from "../public/avatar-two.png"
import AvatarThree from "../public/avatar-three.png"

const SellNfts = () => {
  return (
    <div className="grid sm:grid-cols-2 gap-8 w-10/12 mx-auto h-[600px]">
      <div className="flex items-center justify-center relative">
        <div className="mr-10 relative">
          <div className="mb-10">
            <Image src={DiscoverOne} alt="" height={"250px"} width={"250px"} />
          </div>
          <div className="ml-[100px]">
          <Image src={DiscoverThree} alt="" height={"150px"} width={"150px"} />
          </div>
          {/* avatar - 1 */}
          <div className="absolute top-[48%] right-[-20px] hidden sm:inline">
            <Image src={AvatarTwo} alt="" height={"50px"} width={"50px"} />
          </div>
          {/* avatar - 2 */}
          <div className="absolute top-[92%] right-[-20px] hidden sm:inline">
            <Image src={AvatarTwo} alt="" height={"50px"} width={"50px"} />
          </div>
        </div>
        <div>
          <Image src={DiscoverTwo} alt="" height={"200px"} width={"200px"} />
        </div>
        {/* avatar - 3 */}
        <div className="absolute top-[60%] right-[40px] hidden sm:inline">
            <Image src={AvatarThree} alt="" height={"50px"} width={"50px"} />
          </div>
      </div>
      <div className="space-y-6 flex flex-col  justify-center">
        <h5 className="font-extrabold sn:text-2xl sm:w-4/12">
          CREATE AND SELL YOUR NFTS
        </h5>
        <p className="sm:text-sm text-xs text-gray-500 sm:w-8/12">
        Porttitor tempus pellentesque risus, fames nam maecenas, phasellus morbi luctus ipsum non vitae tempor. Sapien cubilia quisque, justo litora, donec cras commodo ante faucibus fames. Vivamus mollis integer, pretium libero, aptent odio
        </p>
        <button
          type="submit"
          className="bg-[rgb(61,0,183)] hover:bg-[rgba(61,0,183,0.88)] text-white rounded-3xl text-sm py-3 font-semibold sm:w-3/12 w-6/12"
        >
          Sign Up Now
        </button>
      </div>
    </div>
  );
};

export default SellNfts;
