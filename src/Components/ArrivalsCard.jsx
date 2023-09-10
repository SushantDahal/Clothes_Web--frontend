import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

function ArrivalsCard(props) {
  return (
    <div className="text-black py-4 ">
      <img
        className="bg-transparen ml-4 w-[320px] h-[400px] "
        src={props.img}
        alt="/"
      />
      <div className="ml-4 grid grid-cols-3">
        <div className="col-span-2">
          <h2 className="text-black font-bold md:text-[16px] text-2xl pt-2 ">
            {props.name}
          </h2>

          <p className="text-gray-600 text-[22px] md:text-[14px]  ">
            {props.explore}
          </p>
        </div>

        <AiOutlineArrowRight
          className="relative  my-6 ml-[50px] text-gray-500"
          size={20}
        />
      </div>
    </div>
  );
}
export default ArrivalsCard;
