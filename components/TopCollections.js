import Image from "next/image";
import TopCollection from "../public/top-collection-1.png";
import Avatar from "../public/avatar.webp";
import EthereumTwo from "../public/ethereum-2.png";
import EthereumOne from "../public/ethereum-1.png";
import CollectionOne from "../public/collection-1.png";
import CollectionTwo from "../public/collection-2.png";
import CollectionThree from "../public/collection-3.png";
import cryptoOne from "../public/crypto-1.png";
import cryptoTwo from "../public/crypto-2.png";
import cryptoThree from "../public/crypto-3.png";
import cryptoFour from "../public/crypto-4.png";
import cryptoFive from "../public/crypto-5.png";

const TopCollections = () => {
  return (
    <div className="grid sm:grid-cols-3 gap-10 w-10/12 mx-auto py-10">
      <div>
        <div>
          <Image src={TopCollection} alt=""  layout="responsive" />
        </div>
        <div className="flex items-center justify-between mr-4 mt-4">
          <div className="flex justify-start items-center">
            <div className="mr-4">
              <Image
                src={Avatar}
                alt=""
                height={"30px"}
                width={"30px"}
                className="rounded-full"
              />
            </div>
            <div className="text-sm">
              <h5 className="font-semibold">The Futr Abstr</h5>
              <p className="text-gray-500">10 in the stock</p>
            </div>
          </div>
          <div className="text-sm">
            <p>Highest Bid</p>
            <div className="flex">
              <Image src={EthereumTwo} alt="" width={"10px"} height={"10px"} />
              <p className="font-semibold ml-2">0.25 ETH</p>
            </div>
          </div>
        </div>
      </div>
      {/* middle */}
      <div className="flex flex-col items-center space-y-4 border-r-2 border-gray-200">
       <div className="flex">
       <div>
          <Image src={CollectionOne} alt="" />
        </div>
        <div className="ml-5 space-y-4 p-2">
          <h5 className="sm:font-semibold text-sm sm:text-[20px]">The Futr Abstr</h5>
          <div className="flex space-x-2 items-center justify-center">
            <div>
              <Image
                src={Avatar}
                alt=""
                height={"30px"}
                width={"30px"}
                className="rounded-full"
              />
            </div>
            <div className="flex border-2 px-[3px] py-[1px] border-[#00AC4F] rounded-md items-center justify-center">
              <div className="sm:mr-2 sm:mt-1">
                <Image
                  src={EthereumOne}
                  alt=""
                  width={"12px"}
                  height={"15px"}
                />
              </div>
              <div>
              <p className="sm:text-sm text-xs sm:mr-2 text-[#00AC4F]">0.25 ETH</p>
              </div>
            </div>
            <p className="sm:text-sm text-xs text-gray-500">1 of 8</p>
          </div>
          <button className="bg-[rgb(61,0,183)] text-white rounded-full text-sm sm:px-5 px-3 sm:py-[8px] py-[4px]">place a bid</button>
        </div>
       </div>
       {/* second */}
       <div className="flex">
       <div>
          <Image src={CollectionTwo} alt="" />
        </div>
        <div className="ml-5 space-y-4 p-2">
          <h5 className="sm:font-semibold text-sm sm:text-[20px]">The Futr Abstr</h5>
          <div className="flex space-x-2 items-center justify-center">
            <div>
              <Image
                src={Avatar}
                alt=""
                height={"30px"}
                width={"30px"}
                className="rounded-full"
              />
            </div>
            <div className="flex border-2 px-[3px] py-[1px] border-[#00AC4F] rounded-md items-center justify-center">
              <div className="sm:mr-2 sm:mt-1">
                <Image
                  src={EthereumOne}
                  alt=""
                  width={"12px"}
                  height={"15px"}
                />
              </div>
              <div>
              <p className="sm:text-sm text-xs sm:mr-2 text-[#00AC4F]">0.25 ETH</p>
              </div>
            </div>
            <p className="sm:text-sm text-xs text-gray-500">1 of 8</p>
          </div>
          <button className="text-[#3D00B7] border-2 border-[#3D00B7] rounded-full text-sm sm:px-5 px-3 sm:py-[8px] py-[4px]">place a bid</button>
        </div>
       </div>
       {/* third */}
       <div className="flex">
       <div>
          <Image src={CollectionThree} alt="" />
        </div>
        <div className="ml-5 space-y-4 p-2">
          <h5 className="sm:font-semibold text-sm sm:text-[20px]">The Futr Abstr</h5>
          <div className="flex space-x-2 items-center justify-center">
            <div>
              <Image
                src={Avatar}
                alt=""
                height={"30px"}
                width={"30px"}
                className="rounded-full"
              />
            </div>
            <div className="flex border-2 px-[3px] py-[1px] border-[#00AC4F] rounded-md items-center justify-center">
              <div className="sm:mr-2 sm:mt-1">
                <Image
                  src={EthereumOne}
                  alt=""
                  width={"12px"}
                  height={"15px"}
                />
              </div>
              <div>
              <p className="sm:text-sm text-xs sm:mr-2 text-[#00AC4F]">0.25 ETH</p>
              </div>
            </div>
            <p className="sm:text-sm text-xs text-gray-500">1 of 8</p>
          </div>
          <button className="text-[#3D00B7] border-2 border-[#3D00B7] rounded-full text-sm sm:px-5 px-3 sm:py-[8px] py-[4px]">place a bid</button>
        </div>
       </div>
      </div>
      {/* collection */}
      <div className="space-y-4 w-8/12">
        <h5 className="font-extrabold sm:text-xl">TOP COLLECTIONS OVER</h5>
        <p className="font-semibold text-[#3D00B7]">Last 7 days</p>
        <div className="flex items-center space-x-4 space-y-2 border-b-2 border-gray-200 pb-[10px]">
          <p className="text-2xl font-bold">1</p>
          <div className="mt-3">
              <Image src={cryptoOne} alt="" width={"35px"} height={"35px"} />
          </div>
          <div>
            <p className="font-semibold">CryptoFunks</p>
            <div className="flex space-y-1 space-x-2">
              <Image src={EthereumTwo} alt="" width={"10px"} height={"10px"} />
              <p className="text-sm">19,769.39</p>
            </div>
          </div>
          <p className="text-[#14C8B0] text-md font-semibold">+26.52%</p>
        </div>
        {/* second */}
        <div className="flex items-center space-x-4 space-y-2 border-b-2 border-gray-200 pb-[10px]">
          <p className="text-2xl font-bold">2</p>
          <div className="mt-3">
              <Image src={cryptoTwo} alt="" width={"35px"} height={"35px"} />
          </div>
          <div>
            <p className="font-semibold">Cryptix</p>
            <div className="flex space-y-1 space-x-2">
              <Image src={EthereumTwo} alt="" width={"10px"} height={"10px"} />
              <p className="text-sm">2,769.39</p>
            </div>
          </div>
          <p className="text-[#FF002E] text-md font-semibold">+10.52%</p>
        </div>
        {/* third */}
        <div className="flex items-center space-x-4 space-y-2 border-b-2 border-gray-200 pb-[10px]">
          <p className="text-2xl font-bold">3</p>
          <div className="mt-3">
              <Image src={cryptoThree} alt="" width={"35px"} height={"35px"} />
          </div>
          <div>
            <p className="font-semibold">Frensware</p>
            <div className="flex space-y-1 space-x-2">
              <Image src={EthereumTwo} alt="" width={"10px"} height={"10px"} />
              <p className="text-sm">9,232.39</p>
            </div>
          </div>
          <p className="text-[#14C8B0] text-md font-semibold">+2.52%</p>
        </div>
        {/* four */}
        <div className="flex items-center space-x-4 space-y-2 border-b-2 border-gray-200 pb-[10px]">
          <p className="text-2xl font-bold">4</p>
          <div className="mt-3">
              <Image src={cryptoFour} alt="" width={"35px"} height={"35px"} />
          </div>
          <div>
            <p className="font-semibold">PunkArt</p>
            <div className="flex space-y-1 space-x-2">
              <Image src={EthereumTwo} alt="" width={"10px"} height={"10px"} />
              <p className="text-sm">3,669.39</p>
            </div>
          </div>
          <p className="text-[#14C8B0] text-md font-semibold">+1.72%</p>
        </div>
        {/* five */}
        <div className="flex items-center space-x-4 space-y-2">
          <p className="text-2xl font-bold">5</p>
          <div className="mt-3">
              <Image src={cryptoFive} alt="" width={"35px"} height={"35px"} />
          </div>
          <div>
            <p className="font-semibold">Art Crypto</p>
            <div className="flex space-y-1 space-x-2">
              <Image src={EthereumTwo} alt="" width={"10px"} height={"10px"} />
              <p className="text-sm">10,769.48</p>
            </div>
          </div>
          <p className="text-[#FF002E] text-md font-semibold">+6.40%</p>
        </div>
      </div>
    </div>
    
  );
};

export default TopCollections;
