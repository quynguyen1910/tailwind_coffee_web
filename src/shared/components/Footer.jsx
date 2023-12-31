import { getImage } from "../ultils";
import Heading from "./Heading";

const Footer = () => {
  return (
    <>
      <div className="">
        <div
          className="ct-container-secondary bg-primary px-24 py-20 mb-24
          ct-responsive-pd
        "
        >
          <div className="ct-container flex flex-col gap-7 text-center">
            <div className="text-white text-opacity-70 font-bold">
              <Heading>SIGN UP AND GET FREE COFFEE BAGS</Heading>
            </div>
            <div className="ct-heading-h2 text-white">Coffee Updates</div>

            <div
              className="flex gap-x-4 w-[500px] mx-auto
              md:flex-col md:gap-y-3 md:max-w-full
              sm:flex-col sm:gap-y-3 sm:max-w-full

            "
            >
              <input
                className="p-5 w-full bg-inherit text-white text-xs border border-[#2f303e] hover:border-[#ccc] transition-all duration-300"
                placeholder="CUSTOMER@COFFEESTYLE.IS"
                type="text"
                name=""
                id=""
              />
              <button className="bg-white px-5 py-4 text-primary">
                SUSCRIBE
              </button>
            </div>
          </div>
        </div>

        <div
          className="ct-container flex gap-5 justify-between
        md:flex-col md:items-center md:text-center md:gap-y-20
        sm:flex-col sm:items-center sm:text-center sm:gap-y-20
        "
        >
          <div
            className="flex-1 flex flex-col items-center
          "
          >
            <a
              className="block w-28 cursor-pointer mb-10
            sm:mb-5
            "
            >
              <img
                className="ct-image object-contain"
                src={getImage("logo.png")}
                alt="logo"
              />
            </a>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-3 text-sm text-ct-black-60 ">
                <span>
                  Delivering the best coffee life since 1996. From coffee geeks
                  to the real ones.
                </span>
                <a className="text-xs font-bold text-ct-black-15 hover:text-ct-brown cursor-pointer">
                  CoffeeStyle Inc. © 1996
                </a>
              </div>
            </div>
          </div>
          <div className="flex-1 text-center">
            <label
              className="block text-xs font-bold text-ct-black-60 mb-10
            sm:mb-5
            md:mb-5
            "
            >
              MENU
            </label>
            <div className="flex flex-col gap-3">
              <a className="text-sm text-ct-black-60 hover:text-ct-brown cursor-pointer">
                Home
              </a>
              <a className="text-sm text-ct-black-60 hover:text-ct-brown cursor-pointer">
                Our Products
              </a>
              <a className="text-sm text-ct-black-60 hover:text-ct-brown cursor-pointer">
                About
              </a>
              <a className="text-sm text-ct-black-60 hover:text-ct-brown cursor-pointer">
                Contact
              </a>
              <a className="text-sm text-ct-black-60 hover:text-ct-brown cursor-pointer">
                Styleguide
              </a>
            </div>
          </div>
          <div className="flex-1 text-center">
            <label
              className="block text-xs font-bold text-ct-black-60 mb-10
            sm:mb-5
            md:mb-5
            "
            >
              FOLLOW US
            </label>
            <div className="flex flex-col gap-3">
              <a className="text-sm text-ct-black-60 hover:text-ct-brown cursor-pointer">
                Facebook
              </a>
              <a className="text-sm text-ct-black-60 hover:text-ct-brown cursor-pointer">
                Instagram
              </a>
              <a className="text-sm text-ct-black-60 hover:text-ct-brown cursor-pointer">
                Pinterest
              </a>
              <a className="text-sm text-ct-black-60 hover:text-ct-brown cursor-pointer">
                Twitter
              </a>
            </div>
          </div>
          <div className="flex-1 text-center">
            <label
              className="block text-xs font-bold text-ct-black-60 mb-10
            sm:mb-5
            md:mb-5
            "
            >
              CONTACT US
            </label>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-3 text-sm text-ct-black-60 ">
                <span>We’re Always Happy to Help </span>
                <a className="text-xl font-bold text-primary hover:text-ct-brown cursor-pointer">
                  us@coffeestyle.io
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
