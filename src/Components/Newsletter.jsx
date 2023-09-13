import React from "react";

function Newsletter() {
  return (
    <div className="text-white pt-16">
      <div className="py-16 bg-[#f8d63c]  md:h-[400px] h-full text-center">
        <h1 className="text-3xl py-2  font-bold md:text-5xl">
          JOIN SHOPPING COMMUNITY TO <br /> GET MONTHLY PROMO
        </h1>
        <p className="text-xl md:text-2xl py-4">
          Type your email down below and be young wild generation
        </p>
        <div className="bg-white w-[350px] mx-auto flex justify-between rounded-lg">
          <input
            type="text"
            placeholder="Enter Email"
            className="mx-2 text-black"
          />
          <button className="bg-black py-2 my-2 mx-2 rounded-md w-[80px] font-bold">
            SEND
          </button>
        </div>
      </div>
    </div>
  );
}
export default Newsletter;
