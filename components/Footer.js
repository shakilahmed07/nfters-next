import Image from "next/image";
import Facebook from "../public/facebook.png";
import Twitter from "../public/twitter.png";
import Linkedin from "../public/linkedin.png";

const Footer = () => {
  return (
    <div className="grid sm:grid-cols-4 sm:gap-4 sm:py-12  py-12 w-10/12 mx-auto">
      <div className="sm:space-y-2 space-y-4">
        <p className="font-extrabold text-2xl">NFTERS</p>
        <div className="space-y-4">
          <p className="text-sm text-gray-500 sm:w-10/12">
          Euismod Porttitor Condimentum Porttitor Ornare Tristique Ullamcorper Consectetur Elementum Tristique Aptent
          </p>
          <div className="flex items-center space-x-2">
            <div className="cursor-pointer">
              <Image src={Facebook} alt="" width={"30px"} height={"30px"} />
            </div>
            <div className="cursor-pointer">
              <Image src={Twitter} alt="" width={"30px"} height={"30px"} />
            </div>
            <div className="cursor-pointer">
              <Image src={Linkedin} alt="" width={"30px"} height={"30px"} />
            </div>
          </div>
        </div>
      </div>
      <div className="my-4 sm:my-0">
        <p className="font-semibold mb-4 cursor-pointer">Market Place</p>
        <ul className="space-y-2">
          <li className="text-sm text-gray-500 cursor-pointer">All NFTs</li>
          <li className="text-sm text-gray-500 cursor-pointer">New</li>
          <li className="text-sm text-gray-500 cursor-pointer">Art</li>
          <li className="text-sm text-gray-500 cursor-pointer">Sports</li>
          <li className="text-sm text-gray-500 cursor-pointer">Utility</li>
        </ul>
      </div>
      <div>
        <p className="font-semibold mb-4 cursor-pointer">My Account</p>
        <ul className="space-y-2">
          <li className="text-sm text-gray-500 cursor-pointer">Profile</li>
          <li className="text-sm text-gray-500 cursor-pointer">Favorite</li>
          <li className="text-sm text-gray-500 cursor-pointer">My Collections</li>
          <li className="text-sm text-gray-500 cursor-pointer">Setting</li>
        </ul>
      </div>
      <div className="space-y-4 py-5 sm:py-0">
        <p className="font-semibold mb-4 cursor-pointer">Stay In The Loop</p>
        <p className="text-sm text-gray-500">
        Est Lacus Porta Platea Rhoncus Ullamcorper Mauris Sociosqu Taciti Nostra Facilisis Leo Libero Volutpat Consectetur
        </p>
        {/* newsletter */}
        <div className="flex border-2 rounded-full items-center justify-center">
          <input
            type="text"
            placeholder="Enter Your Email Address"
            className=" placeholder:text-gray-300  outline-none px-[5px] text-sm"
          />

          <button className="bg-[#2639ED] hover:bg-[rgba(61,0,183,0.88)] text-white text-sm font-semibold rounded-full w-full m-[2px] py-2">
            Subscribe Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
