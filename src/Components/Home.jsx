import React from "react";
import home from "../assets/Home.png";
import Star from "../assets/Star1.png";
import Background from "../assets/Background.png";
import { Typewriter } from "react-simple-typewriter";

function Home() {
  return (
    <div className=" w-ful py- px-4 ">
      <div className=" max-w-[1240px] mx-auto grid md:grid-cols-2">
        <div className="bg-[#d4d3d3] md:rounded-l-[30px]  ">
          <div className="grid justify-center ">
            <h1 className="text-black  uppercase font-bold md:text-[82px] text-7xl md:mt-[60px] ">
              let's <br /> Explore <br />
              <span className="bg-[#EBD96B] px-4 py-1 my-2 skew-y-6 absolute">
                <Typewriter
                  words={["Unique", "Classic", "Stylish", "Rebellious"]}
                  loop={""}
                  cursor
                  cursorStyle="."
                  cursorColor="Black"
                  typeSpeed={90}
                  backSpped={90}
                />
              </span>
              <br />
              Cloth
            </h1>
            <p className="my-4  ">
              Live for Influential and Innovative fashion!
            </p>
            <div className="flex  py-2">
              <img
                src={Background}
                alt="/"
                className="md:w-[200px] w-[150px] h-[30px]  my-auto"
              />
              <button className="bg-black text-white md:w-[140px] hover:scale-125 hover:rotate-2 duration-100  rounded py-3 ml-8 w-[100px]">
                Shop Now
              </button>
            </div>
          </div>
        </div>
        <div className="md:rounded-r-[30px]  bg-[#d4d3d3] relative z-[-1] py-7">
          <img src={Star} alt="/" className="absolute top-10 left-8 w-10 " />
          <img src={Star} alt="/" className="absolute top-10 right-12   " />
          <img
            src={Star}
            alt="/"
            className="absolute bottom-10 left-7 w-12  "
          />
          <img src={Star} alt="/" className="absolute bottom-9 right-6 " />
          <img className=" h-full" src={home} alt="/" />
        </div>
      </div>
    </div>
  );
}
export default Home;
