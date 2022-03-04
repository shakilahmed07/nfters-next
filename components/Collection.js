import Image from "next/image";
import TopCollection from "../public/top-collection-1.png";
import Avatar from "../public/avatar.webp";
import CollectionOne from "../public/collection-1.png";
import CollectionTwo from "../public/collection-2.png";
import CollectionThree from "../public/collection-3.png";
import DiscoverOne from "../public/discover-1.png";
import discoverTwo from "../public/discover-2.png";

const Collection = () => {
  return (
    <div className="bg-[#D9E0EC33] h-[600px] py-10 hidden sm:inline">
      <div className="w-10/12 mx-auto">
        <h2 className="text-[28px] font-extrabold mb-10">
          COLLECTION FEATURED NFTS
        </h2>

        <div className="grid sm:grid-cols-3 gap-4">
          <div>
            <div className="flex justify-between">
              <div>
                <Image
                  src={TopCollection}
                  alt=""
                  height={"330px"}
                  width={"295px"}
                />
              </div>
              <div className="flex flex-col space-y-2">
              <div>
              <Image src={discoverTwo} alt="" height={"100px"}
                  width={"100px"} />
              </div>
             <div>
             <Image src={CollectionTwo} alt="" height={"100px"}
                  width={"100px"} />
             </div>
             <div>
             <Image src={CollectionThree} alt="" height={"100px"}
                  width={"100px"} />
             </div>
              </div>
            </div>
            <div className="py-4 space-y-2">
              <p className="font-semibold text-md">Amazing Collection</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                <Image
                  src={Avatar}
                  alt=""
                  height={"30px"}
                  width={"30px"}
                  className="rounded-full"
                />
                <p className="text-sm font-semibold ml-4">by Shakil77</p>
                </div>
                <p className="border rounded-2xl border-[#2639ED] text-[#2639ED] text-sm px-2 py-[2px] font-semibold cursor-pointer">Total 54 items</p>
              </div>
            </div>
          </div>
          {/* second */}
          <div>
            <div className="flex justify-between">
              <div>
                <Image
                  src={DiscoverOne}
                  alt=""
                  height={"330px"}
                  width={"295px"}
                />
              </div>
              <div className="flex flex-col space-y-2">
              <div>
              <Image src={CollectionOne} alt="" height={"100px"}
                  width={"100px"} />
              </div>
             <div>
             <Image src={CollectionTwo} alt="" height={"100px"}
                  width={"100px"} />
             </div>
             <div>
             <Image src={CollectionThree} alt="" height={"100px"}
                  width={"100px"} />
             </div>
              </div>
            </div>
            <div className="py-4 space-y-2">
              <p className="font-semibold text-md">Amazing Collection</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                <Image
                  src={Avatar}
                  alt=""
                  height={"30px"}
                  width={"30px"}
                  className="rounded-full"
                />
                <p className="text-sm font-semibold ml-4">by Shakil77</p>
                </div>
                <p className="border rounded-2xl border-[#2639ED] text-[#2639ED] text-sm px-2 py-[2px] font-semibold cursor-pointer">Total 54 items</p>
              </div>
            </div>
          </div>
          {/* third */}
          <div>
            <div className="flex justify-between">
              <div>
                <Image
                  src={CollectionTwo}
                  alt=""
                  height={"330px"}
                  width={"295px"}
                />
              </div>
              <div className="flex flex-col space-y-2">
              <div>
              <Image src={CollectionThree} alt="" height={"100px"}
                  width={"100px"} />
              </div>
             <div>
             <Image src={DiscoverOne} alt="" height={"100px"}
                  width={"100px"} />
             </div>
             <div>
             <Image src={CollectionOne} alt="" height={"100px"}
                  width={"100px"} />
             </div>
              </div>
            </div>
            <div className="py-4 space-y-2">
              <p className="font-semibold text-md">Amazing Collection</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                <Image
                  src={Avatar}
                  alt=""
                  height={"30px"}
                  width={"30px"}
                  className="rounded-full"
                />
                <p className="text-sm font-semibold ml-4">by Shakil77</p>
                </div>
                <p className="border rounded-2xl border-[#2639ED] text-[#2639ED] text-sm px-2 py-[2px] font-semibold cursor-pointer">Total 54 items</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
