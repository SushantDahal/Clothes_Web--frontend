import React from "react";
import Small from "../assets/Text.png";
import favourite from "../Favourite";

import FavouriteCard from "./FavouriteCard";

function Favourite() {
  return (
    <div className="max-w-[1240px] mx-auto py-10 text-black">
      <div className="font-bold my-4 flex uppercase max-w-[500px] ml-14 justify-center md:justify-normal">
        <h1 className="text-3xl  md:text-4xl z-20  ">Young's Favourite</h1>
        <img src={Small} alt="/" className="absolute pl-[180px] pt-3 " />
      </div>
      <div className="py-3 grid md:grid-cols-2 gap-12 max-w-[1240px] px-4 mx-auto ">
        {favourite.map((fav) => {
          return (
            <FavouriteCard
              key={fav.id}
              img={fav.img}
              name={fav.name}
              explore={fav.explore}
            />
          );
        })}
      </div>
    </div>
  );
}
export default Favourite;
