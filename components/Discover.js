import Image from "next/image";
import Avatar from "../public/avatar.webp"
import EthereumThree from "../public/ethereum-3.png"
import LiveAuction from "../public/live-auction.png"
import DiscoverTwo from "../public/discover-2.png"
import DiscoverThree from "../public/discover-3.png"

const Discover = () => {
  return (
    <div className="w-10/12 mx-auto grid grid-cols-2 gap-10 h-[440px] py-10">
      <div className="sm:space-y-5">
        <div className="space-y-5 mb-4">
          <h1 className="sm:text-[40px] text-[20px] sm:font-extrabold font-bold">DISCOVER, AND COLLECT DIGITAL ART NFTS</h1>
          <p className="text-sm text-gray-500 sm:w-6/12">Digital marketplace for crypto collectribles and non-fungible tokens
            (NFTs) Buy, Sell and discover exclusive digital assets.</p>
        </div>
        <button className="bg-[rgb(61,0,183)] text-white rounded-3xl mr-8 text-sm px-8 py-[7px] font-semibold hover:bg-[rgba(61,0,183,0.88)]">Explore Now</button>

        {/* count nft work */}
        <div className="flex">
          <div className="mr-4">
            <h4 className="font-extrabold text-[20px]">98K+</h4>
            <p className="text-sm text-gray-500">Artwork</p>
          </div>
          <div className="mr-4">
            <h4 className="font-extrabold text-[20px]">12K+</h4>
            <p className="text-sm text-gray-500">Auction</p>
          </div>
          <div>
            <h4 className="font-extrabold text-[20px]">15K+</h4>
            <p className="text-sm text-gray-500">Artist</p>
          </div>
        </div>
      </div>
      {/* discover Image slide */}
      <div className="bg-[url('../public/discover-1.png')] bg-contain bg-no-repeat relative ml-4">
        <div className="text-white pt-4 pl-4 space-y-2">
          <p className="font-semibold text-xl">Abstr Gradient NFT</p>
          <div className="flex space-x-2 items-center">
            <Image src={Avatar} alt="" height={"25px"} width={"25px"} className="rounded-full" />
            <p className="-mt-1 font-bold">Tanvir</p>
          </div>
        </div>
        {/* Live Auction */}
        <div className="absolute top-[40%] left-[-50px] hidden sm:inline">
          <Image src={LiveAuction} alt="" height={"100px"} width={"100px"} />
        </div>
        {/* last item */}
        <div className="flex justify-between sm:mt-[200px] mt-[100px] sm:w-[48%] sm:ml-4 sm:px-4 sm:py-2 rounded-lg bg-gradient-to-r from-[#36c9ee69] to-[#5854c796] text-white px-4 ">
          <div className="space-y-2">
            <p className="text-sm">Current Bid</p>
            <div className="flex space-x-2">
              <Image src={EthereumThree} alt="" />
              <p className="font-semibold">0.25 ETH</p>
            </div>
          </div>
          <div className="space-y-2">
          <p className="text-sm">Ends in</p>
          <p className="font-semibold">12h 43m 42s</p>
          </div>
        </div>
      </div>
      {/* image one slide */}
      <div className="absolute top-[20%] left-[56%] z-[-1] hidden sm:inline">
        <Image src={DiscoverTwo} alt="" height={"300px"} width={"300px"} />
      </div>
      {/* image two slide */}
      <div className="absolute top-[24%] left-[61%] z-[-10] hidden sm:inline">
        <Image src={DiscoverThree} alt="" height={"250px"} width={"250px"} />
      </div>
    </div>
  );
};

export default Discover;
