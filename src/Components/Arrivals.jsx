import React from "react";
import arrivals from "../arrivals";
import ArrivalsCard from "./ArrivalsCard";
import small from "../assets/Text.png";

function Arrivals() {
  return (
    <div className="w-full bg-white pb-16 px-4">
      <div className="font-bold my-4 flex uppercase max-w-[500px] mx-auto md:ml-8  justify-center md:justify-normal">
        <h1 className="text-4xl z-20  ">New Arrivals</h1>
        <img src={small} alt="/" className="absolute pl-[110px] pt-2 " />
      </div>
      <div className="max-w-[1240px]  mx-auto grid md:grid-cols-3 gap-8 px-4 justify-center ">
        {arrivals.map((arrival) => {
          return (
            <ArrivalsCard
              key={arrival.id}
              img={arrival.img}
              name={arrival.name}
              explore={arrival.explore}
            />
          );
        })}
      </div>
    </div>
  );
}
export default Arrivals;
