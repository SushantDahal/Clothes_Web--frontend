import React from "react";
import Banner from "../assets/Banner.png";
import Star1 from "../assets/Star1.png";

function Sale() {
  return (
    <div className="bg-[#f3d033] ">
      <div className="text-black max-w-[1240px] mx-auto ">
        <div className="   w-full  grid md:grid-cols-2 ">
          <div className="relative ">
            <img className="bg-white h-full" src={Banner} alt="/s" />
            <img src={Star1} alt="/" className="absolute top-10 left-8 w-16 " />
            <img
              src={Star1}
              alt="/"
              className="absolute top-10 right-12 w-24  "
            />
            <img
              src={Star1}
              alt="/"
              className="absolute bottom-14 w-24 left-7   "
            />
            <img
              src={Star1}
              alt="/"
              className="absolute bottom-9 right-6 w-18"
            />
          </div>
          <div className="flex bg-[#f1d34b]  py-6 justify-center items-center ">
            <div className="px-4">
              <div>
                <h1 className="bg-white font-bold w-[280px] text-6xl md:text-7xl -skew-y-6  ">
                  PAYDAY
                </h1>
                <h1 className="text-6xl md:text-7xl font-bold mt-4 py-4 ">
                  SALE NOW
                </h1>
              </div>
              <div className="py-6">
                <p className="capitalize font-mono py-2 text-xl">
                  Spend minimal $100 get 30% off
                  <br />
                  voucher code for your next purchase
                </p>
                <h3 className="font-bold text-xl ">
                  15 September - 25 September 2023
                </h3>
                <p className="text-xl ml-2 py-2">*Terms & Conditions apply</p>
              </div>
              <button className="w-[160px] hover:scale-125 hover:rotate-2 duration-100  bg-black text-white py-4 rounded-lg">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Sale;
