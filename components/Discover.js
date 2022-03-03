const Discover = () => {
  return (
    <div className="w-10/12 mx-auto grid grid-cols-2 gap-10 h-[440px] py-10">
      <div className="space-y-5">
        <div>
          <h1 className="text-[40px] font-extrabold">DISCOVER, AND COLLECT DIGITAL ART NFTS</h1>
          <p className="text-sm text-gray-500 w-6/12">Digital marketplace for crypto collectribles and non-fungible tokens
            (NFTs) Buy, Sell and discover exclusive digital assets.</p>
        </div>
        <button className="bg-[rgb(61,0,183)] text-white rounded-3xl mr-8 text-sm px-8 py-3 font-semibold">Explore Now</button>
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
      <div className="bg-[url('../public/discover-1.png')] bg-contain bg-no-repeat">
        <div className="text-white pt-4 pl-4">
          <p className="font-semibold">Abstr Gradient NFT</p>
          <div>
            {/* avatar */}
            <p>shakil7</p>
          </div>
        </div>
        {/* last item */}
        <div className="mt-[200px] w-[38%] ml-4 px-4 py-2 rounded-lg bg-gradient-to-r from-[#36c9ee69] to-[#5854c796] text-white flex justify-between">
          <div className="space-y-2">
            <p className="text-sm">Current Bid</p>
            <div>
              {/* icon */}
              <p className="font-semibold">0.25 ETH</p>
            </div>
          </div>
          <div className="space-y-2">
          <p className="text-sm">Ends in</p>
          <p className="font-semibold">12h 43m 42s</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
