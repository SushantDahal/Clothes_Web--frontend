import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

function FavouriteCard(props) {
  return (
    <div className="max-w-[600px] mx-auto">
      <img src={props.img} alt="/" className=" h-[400px]" />
      <div className="ml-8 grid grid-cols-3">
        <div className="col-span-2">
          <h2 className="text-black font-bold md:text-[18px] text-2xl pt-2 ">
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
export default FavouriteCard;
