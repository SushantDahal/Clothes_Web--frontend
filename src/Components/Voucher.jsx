import React from "react";
import Mobile from "../assets/Mobile.png";
import Playstore from "../assets/Apple.png";
import Appstore from "../assets/Google.png";

function Voucher() {
  return (
    <div className="pb-16 text-black">
      <div className=" max-w-[1200px]  mx-auto grid md:grid-cols-2 h-full items-center ">
        <div className="bg-[#f7f1c6] px-4 py-12 rounded-lg">
          <div className=" mx-2 text-center md:text-left">
            <h1 className="text-5xl font-bold md:text-4xl my-5 pt-3 ">
              DOWNLOAD APP & <br />
              GET THE VOUCHER!
            </h1>
            <p className="pb-4 font-mono md:text-[17px] text-xl">
              Get 30% off for first transaction using <br />
              Rondovision mobile app for now.
            </p>
            <div className="flex justify-center md:justify-normal gap-4">
              <img
                className="w-[110px] hover:scale-125 hover:rotate-2 duration-100 "
                src={Appstore}
                alt="/"
              />
              <img
                className="w-[110px] hover:scale-125 hover:rotate-2 duration-100 "
                src={Playstore}
                alt="/"
              />
            </div>
          </div>
        </div>
        <div className="">
          <img src={Mobile} className=" md:h-screen    mx-auto " alt="/" />
        </div>
      </div>
    </div>
  );
}
export default Voucher;
