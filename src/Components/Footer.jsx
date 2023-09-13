import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGitSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="text-white">
      <div className="py-4 grid w-full mx-auto md:grid-cols-3 h-full md:h-[300px] gap-4 bg-black">
        <div className=" py-2 mx-8 px-10">
          <h1 className="text-3xl font-bold py-3">FASHION</h1>
          <p className="text-[14px]">
            Complete your style with awesome <br /> clothes from us.
          </p>
          <div className="flex gap-4 my-6 ">
            <FaFacebookSquare size={35} />
            <FaGitSquare size={35} />
            <FaTwitterSquare size={35} />
            <FaInstagram size={35} />
          </div>
        </div>
        <div className="text-gray-500 flex justify-between mx-5 px-4 col-span-2">
          <div className="mx-2 ">
            <h3 className=" font-bold my-4">Company</h3>
            <ul>
              <li className="py-2">About</li>
              <li className="py-2">Contact us</li>
              <li className="py-2">Support</li>
              <li className="py-2">Careers</li>
            </ul>
          </div>
          <div className="mx-2 ">
            <h3 className=" font-bold my-4">Quick Link</h3>
            <ul>
              <li className="py-2">Share Location</li>
              <li className="py-2">Others Trackings</li>
              <li className="py-2">Size Guides</li>
              <li className="py-2">FAQs</li>
            </ul>
          </div>
          <div className="mx-2 ">
            <h3 className=" my-4 font-bold">Legal</h3>
            <ul>
              <li className="py-2">Terms and Conditions</li>
              <li className="py-2">Privacy Policy</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
