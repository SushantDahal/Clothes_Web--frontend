import React from "react";
import Favourite1 from "../assets/Favourite1.png";
import Favourite2 from "../assets/Favourite2.png";
import Small from "../assets/Text.png";
import { AiOutlineArrowRight } from "react-icons/ai";

function Favourite() {
  return (
    <div className="py-10 text-black">
      <div className="font-bold my-4 flex uppercase max-w-[500px] ml-14 justify-center md:justify-normal">
        <h1 className="text-3xl ml-4 md:text-4xl z-20  ">Young's Favourite</h1>
        <img src={Small} alt="/" className="absolute pl-[180px] pt-3 " />
      </div>
      <div className="py-3 grid md:grid-cols-2 gap-12 max-w-[1240px] px-4 mx-auto ">
        <div className="max-w-[600px] ">
          <img src={Favourite1} alt="/" className=" h-[400px]" />
          <div className="ml-8 grid grid-cols-3">
            <div className="col-span-2">
              <h2 className="text-black font-bold md:text-[18px] text-2xl pt-2 ">
                Trending on instagram
              </h2>

              <p className="text-gray-600 text-[22px] md:text-[14px]  ">
                Explore Now
              </p>
            </div>

            <AiOutlineArrowRight
              className="relative  my-6 ml-[50px] text-gray-500"
              size={20}
            />
          </div>
        </div>
        <div className="max-w-[600px] ">
          <img src={Favourite2} alt="/" className=" h-[400px]" />
          <div className="ml-8 grid grid-cols-3">
            <div className="col-span-2">
              <h2
                className="text-black font-bold md:text-[18px] text-2xl  pt-2
 on instagram "
              >
                All Under $40
              </h2>

              <p className="text-gray-600 text-[22px] md:text-[14px]  ">
                Explore Now
              </p>
            </div>

            <AiOutlineArrowRight
              className="relative  my-6 ml-[50px] text-gray-500"
              size={20}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Favourite;
