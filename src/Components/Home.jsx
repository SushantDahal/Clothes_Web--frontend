import React from "react";
import home from "../assets/Home.png";
import Star from "../assets/Star1.png";
import Background from "../assets/Background.png";

function Home() {
  return (
    <div className=" w-ful py- px-4 ">
      <div className="rounded-[30px] max-w-[1240px] mx-auto grid md:grid-cols-2">
        <div className="bg-[#E7E6E6]  ">
          <div className="justify-center my-10">
            <h1 className="text-black lg:text-[95px]  uppercase justify-center items-center  font-bold md:text-[80px] text-8xl md:mt-[60px] ml-9 mr-4">
              let's <br /> Explore <br />{" "}
              <span className="bg-[#EBD96B] px-4 py-1 mx-4 my-2 skew-y-6 absolute">
                Unique
              </span>
              <br />
              Cloth
            </h1>
            <p className="my-4  mx-4 pl-9">
              Live for Influential and Innovative fashion!
            </p>
            <div className="flex justify-start ml-10 py-2">
              <img src={Background} className="w-[200px] h-[30px]  my-auto" />
              <button className="bg-black text-white w-[140px] rounded py-3 ml-8">
                Shop Now
              </button>
            </div>
          </div>
        </div>
        <div className=" bg-[#d4d3d3] relative z-[-1] py-10">
          <img src={Star} className="absolute top-10 left-8 w-10 " />
          <img src={Star} className="absolute top-10 right-12   " />
          <img src={Star} className="absolute bottom-10 left-7 w-12  " />
          <img
            src={Star}
            className="absolute bottom-9 right-6 bg-transparent "
          />
          <img
            className="mt-5 px-4  relative lg:max-w-[580px]  md:w-[550px] w-[590px] h-full"
            src={home}
            alt="/"
          />
        </div>
      </div>
    </div>
  );
}
export default Home;
