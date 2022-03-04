import Image from "next/image";
import Facebook from "../public/facebook.png";
import Twitter from "../public/twitter.png";
import Linkedin from "../public/linkedin.png";

const Footer = () => {
  return (
    <div className="grid sm:grid-cols-4 gap-4 py-12 w-10/12 mx-auto">
      <div className="space-y-2">
        <p className="font-extrabold text-2xl">NFTERS</p>
        <div className="space-y-4">
          <p className="text-sm text-gray-500 w-10/12">
          Euismod Porttitor Condimentum Porttitor Ornare Tristique Ullamcorper Consectetur Elementum Tristique Aptent
          </p>
          <div className="flex items-center space-x-2">
            <div>
              <Image src={Facebook} alt="" width={"30px"} height={"30px"} />
            </div>
            <div>
              <Image src={Twitter} alt="" width={"30px"} height={"30px"} />
            </div>
            <div>
              <Image src={Linkedin} alt="" width={"30px"} height={"30px"} />
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="font-semibold mb-4">Market Place</p>
        <ul className="space-y-2">
          <li className="text-sm text-gray-500">All NFTs</li>
          <li className="text-sm text-gray-500">New</li>
          <li className="text-sm text-gray-500">Art</li>
          <li className="text-sm text-gray-500">Sports</li>
          <li className="text-sm text-gray-500">Utility</li>
        </ul>
      </div>
      <div>
        <p className="font-semibold mb-4">My Account</p>
        <ul className="space-y-2">
          <li className="text-sm text-gray-500">Profile</li>
          <li className="text-sm text-gray-500">Favorite</li>
          <li className="text-sm text-gray-500">My Collections</li>
          <li className="text-sm text-gray-500">Setting</li>
        </ul>
      </div>
      <div className="space-y-4">
        <p className="font-semibold">Stay In The Loop</p>
        <p className="text-sm text-gray-500">
        Est Lacus Porta Platea Rhoncus Ullamcorper Mauris Sociosqu Taciti Nostra Facilisis Leo Libero Volutpat Consectetur
        </p>
        {/* newsletter */}
        <div className="sm:flex border-2 rounded-full items-center justify-center hidden">
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
