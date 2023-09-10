import React from "react";
import Hm from "../assets/Brand1.png";
import Shophify from "../assets/Brand2.png";
import Amazon from "../assets/Brand3.png";
import Levis from "../assets/Brand4.png";
import Obey from "../assets/Brand5.png";
import Lasoste from "../assets/Brand6.png";

function Brand() {
  return (
    <div className="w-full  md:text-[82px] text-7xl py-16 ">
      <div className="bg-[#EBD96B] px-10 justify-center  grid gap-8 py-4 md:flex">
        <img
          className="md:w-[170px]  w-[200px] h-[55px] md:max-h-[50px] hover:translate-y-2 duration-150  "
          alt="/"
          src={Hm}
        />

        <img
          className="md:w-[170px] w-[200px] h-[55px] md:max-h-[50px] hover:translate-y-2 duration-150  "
          alt="/"
          src={Shophify}
        />
        <img
          className="md:w-[170px] w-[200px] h-[55px] md:max-h-[50px] hover:translate-y-2 duration-150  "
          alt="/"
          src={Lasoste}
        />
        <img
          className="md:w-[170px] w-[200px] h-[55px] md:max-h-[50px] hover:translate-y-2 duration-150 "
          alt="/"
          src={Levis}
        />
        <img
          className="md:w-[170px] w-[200px] h-[55px] md:max-h-[50px] hover:translate-y-2 duration-150 "
          alt="/"
          src={Amazon}
        />
        <img
          className="md:w-[170px] w-[200px] h-[55px] md:max-h-[50px] hover:translate-y-2 duration-150   flex md:hidden "
          alt="/"
          src={Obey}
        />
      </div>
    </div>
  );
}
export default Brand;
