"use client";

import React, { useState } from "react";
import { BiUser } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { useCart } from "../app/context/CartContext";
import CartModal from "./CartModal";

const HeaderMain = () => {
  const { cart } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCartClick = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="border-b border-gray-200 py-6">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center px-4">
        {/* Logo */}
        <div className="font-bold text-3xl sm:text-4xl text-center sm:text-left pb-4 sm:pb-0 text-black">
          Shop
        </div>

        {/* Search Bar */}
        <div className="w-full sm:w-[300px] md:w-[60%] relative mb-4 sm:mb-0">
          <input
            className="border border-gray-300 p-2 px-4 rounded-lg w-full"
            type="text"
            placeholder="Enter any product name..."
          />
          <BsSearch
            className="absolute top-1/2 transform -translate-y-1/2 right-3 text-gray-400"
            size={20}
          />
        </div>

        {/* Icons */}
        <div className="flex gap-4 text-gray-500 text-2xl">
          <BiUser className="cursor-pointer" />
          <div className="relative cursor-pointer">
            <FiHeart />
            <div
              className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] 
              text-[12px] text-white flex items-center justify-center translate-x-1 -translate-y-1"
            >
              0
            </div>
          </div>
          <div className="relative cursor-pointer" onClick={handleCartClick}>
            <HiOutlineShoppingBag />
            <div
              className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] 
              text-[12px] text-white flex items-center justify-center translate-x-1 -translate-y-1"
            >
              {cart.length}
            </div>
          </div>
        </div>
      </div>

      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
};

export default HeaderMain;
