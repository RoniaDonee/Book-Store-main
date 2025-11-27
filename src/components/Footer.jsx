import React from "react";
import { FaInstagram, FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#0c1423] text-white py-12 px-6 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
  
          {/* ABOUT US */}
          <div>
            <h2 className="text-xl font-semibold mb-4">ABOUT US</h2>
            <p className="text-gray-300 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Porro dolorum laudantium earum fugit fugiat eius voluptas
              aperiam numquam, quos, ratione non laborum sed facere ab
              nesciunt enim, quo necessitatibus vero!
            </p>
          </div>
  
          {/* NEWS LETTER */}
          <div>
            <h2 className="text-xl font-semibold mb-4">NEWS LETTER</h2>
            <p className="text-gray-300 mb-4">Stay updated with our latest trends</p>
  
            <div className="flex">
              <input
                type="email"
                placeholder="Email ID"
                className="w-full p-3 text-black placeholder-gray-400 text-black bg-white border "
              />
              <button className="bg-yellow-500 px-5 flex items-center justify-center text-black font-bold">
                →
              </button>
            </div>
          </div>
  
          {/* FOLLOW US */}
          <div>
            <h2 className="text-xl font-semibold mb-4">FOLLOW US</h2>
            <p className="text-gray-300 mb-4">Let us be social</p>
  
            <div className="flex space-x-6 text-2xl">
              <FaInstagram className="cursor-pointer hover:text-gray-300" />
              <FaTwitter className="cursor-pointer hover:text-gray-300" />
              <FaFacebook className="cursor-pointer hover:text-gray-300" />
              <FaLinkedin className="cursor-pointer hover:text-gray-300" />
            </div>
          </div>
        </div>
      </footer>
      {/* COPYRIGHT */}
        <nav className="text-center bg-black text-white p-3  border-t border-gray-700">
          Copyright © 2023 All rights reserved |
          This website is made with ❤️ By Ronia , help of Luminar Technolab
        </nav>
    </>
  );
};

export default Footer;
