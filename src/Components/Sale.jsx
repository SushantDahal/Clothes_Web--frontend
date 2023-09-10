import React from "react";
import Banner from "../assets/Banner.png";

function Sale() {
  return (
    <div className="text-black ">
      <div className="bg-[#E5C643]  w-full h-screen  gap-0  grid md:grid-cols-2 ">
        <div className=" ">
          <img src={Banner} alt="/s" />
        </div>
        <div className="flex  my-auto mx-4 justify-center">
          <div className="bg-[#E5C643] w-full">
            <div>
              <h1 className="bg-white font-bold w-[280px] text-6xl md:text-7xl -skew-y-6  ">
                PAYDAY
              </h1>
              <h1 className="text-6xl md:text-7xl font-bold mt-4 py-4 ">
                SALENOW
              </h1>
            </div>
            <div className="py-4">
              <p className="capitalize font-mono py-2 text-xl">
                Spend minimal $100 get 30% off
                <br />
                voucher code for your next purchase
              </p>
              <h3 className="font-bold text-xl ">1 June - 10 June 2021</h3>
              <p className="text-xl ml-2 py-2">*Terms & Conditions apply</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Sale;
