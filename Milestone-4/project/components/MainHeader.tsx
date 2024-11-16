"use client";

import React, { useState } from "react";
import { BiUser } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { useCart } from "../app/products/context/CartContext";
import CartModal from "./CartModal";

const HeaderMain = () => {
  const { cart } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCartClick = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 border-b border-gray-200 py-6">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="font-bold text-3xl sm:text-4xl text-center sm:text-left pb-4 sm:pb-0 text-white">
          <span className="text-2xl">Shop</span>Mate
        </div>

        {/* Search Bar */}
        <div className="w-full sm:w-[300px] md:w-[60%] relative mb-4 sm:mb-0">
          <input
            className="border bg-white border-gray-300 p-2 px-4 rounded-lg w-full text-gray-700 focus:ring-2 focus:ring-indigo-500 transition duration-300"
            type="text"
            placeholder="Search for products..."
          />
          <BsSearch
            className="absolute top-1/2 transform -translate-y-1/2 right-3 text-gray-400"
            size={20}
          />
        </div>

        {/* Icons */}
        <div className="flex gap-6 text-white text-2xl">
          <BiUser className="cursor-pointer hover:text-indigo-200 transition duration-300" />
          
          <div className="relative cursor-pointer hover:text-indigo-200">
            <FiHeart />
            <div
              className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white flex items-center justify-center translate-x-1 -translate-y-1"
            >
              0
            </div>
          </div>
          
          <div className="relative cursor-pointer hover:text-indigo-200" onClick={handleCartClick}>
            <HiOutlineShoppingBag />
            <div
              className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white flex items-center justify-center translate-x-1 -translate-y-1"
            >
              {cart.length}
            </div>
          </div>
        </div>
      </div>

      {/* Cart Modal */}
      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
};

export default HeaderMain;
