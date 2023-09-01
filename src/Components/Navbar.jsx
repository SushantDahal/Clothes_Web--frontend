import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="max-w-[1240px] bg-grey h-[3rem] mx-auto my-3 py-1 flex items-center   border">
      <img className=" bg-white w-[10rem] pl-4" src={Logo} alt="/" />

      <ul className="uppercase hidden md:flex absolute right-[20%]">
        <li className="px-4 py-2">Catalogue</li>
        <li className="px-4 py-2">Fashion</li>
        <li className="px-4 py-2">Favourite</li>
        <li className="px-4 py-2">Lifestyle</li>
      </ul>
      <button className="hidden md:flex mr-10 absolute right-7 bg-black w-[90px] p-2  text-white rounded uppercase">
        Sign in
      </button>
      <div
        onClick={handleNav}
        className="mr-8 block md:hidden absolute right-6 "
      >
        {nav ? <AiOutlineClose size={"30"} /> : <AiOutlineMenu size={"30"} />}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full bg-[#f3e486] text-white md:hidden  ease-in-out duration-500"
            : "fixed top-[100%]"
        }
      >
        <img className=" bg-transpaent w-[10rem] m-4" src={Logo} alt="/" />
        <ul className=" uppercase text-black">
          <li className="p-6 ">Catalogue</li>
          <li className="p-6 ">Fashion</li>
          <li className="p-6 ">Favourite</li>
          <li className="p-6 ">Lifestyle</li>
        </ul>
        <button className="mx-5 mt-5 bg-black w-[120px] py-3  text-white rounded uppercase">
          Sign in
        </button>
      </div>
    </div>
  );
}

export default Navbar;
