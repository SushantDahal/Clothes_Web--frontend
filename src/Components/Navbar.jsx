import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="flex justify-between items-center h-14 text-xl mx-auto max-w-[1240px] p-4">
      <img className=" bg-white w-[8rem] " src={Logo} alt="/" />

      <ul className="uppercase hidden md:flex ">
        <li className="px-4 py-2">Catalogue</li>
        <li className="px-4 py-2">Fashion</li>
        <li className="px-4 py-2">Favourite</li>
        <li className="px-4 py-2">Lifestyle</li>
      </ul>
      <button className="hidden md-[850px]:flex bg-black w-[110px] pl-2 py-2 text-[14px]   text-white rounded uppercase">
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
        <button className=" bg-black w-[120px] py-3 m-5  text-white rounded uppercase">
          Sign in
        </button>
      </div>
    </div>
  );
}

export default Navbar;
