import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="flex justify-between items-center h-18 text-xl mx-auto max-w-[1240px] p-4 py-8">
      <img className=" bg-white w-[8rem] " src={Logo} alt="/" />

      <ul className="uppercase hidden md:flex  right-[150px]">
        <li className="px-4 text-[18px] py-2">Catalogue</li>
        <li className="px-4 text-[18px] py-2">Fashion</li>
        <li className="px-4 text-[18px] py-2">Favourite</li>
        <li className="pl-4 mr-6 text-[18px] py-2">Lifestyle</li>
      </ul>
      <button className="md:block hidden hover:scale-125 hover:rotate-2 duration-100 ml-4 bg-black w-[110px]  py-2 text-[14px]   text-white rounded uppercase">
        Sign In
      </button>

      <div onClick={handleNav} className="block md:hidden  ">
        {nav ? <AiOutlineClose size={"30"} /> : <AiOutlineMenu size={"30"} />}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full z-20 bg-[#f3e486] text-white md:hidden  ease-in-out duration-500"
            : "fixed top-[100%]"
        }
      >
        <img className=" bg-transpaent w-[10rem] m-4" src={Logo} alt="/" />
        <ul className="text-black">
          <li className="p-6 ">Catalogue</li>
          <li className="p-6 ">Fashion</li>
          <li className="p-6 ">Favourite</li>
          <li className="p-6 ">Lifestyle</li>
        </ul>
        <button className="hover:scale-125 hover:rotate-2 duration-100  bg-black w-[120px] py-3 m-5  text-white rounded uppercase">
          Sign in
        </button>
      </div>
    </div>
  );
}

export default Navbar;
