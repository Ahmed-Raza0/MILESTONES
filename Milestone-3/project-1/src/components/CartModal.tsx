"use client";

import React from "react";
import { useCart } from "../app/context/CartContext";

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartModal: React.FC<CartModalProps> = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, clearCart } = useCart();
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-96 p-6 relative">
        <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
        {cart.length === 0 ? (
          <p className="text-center">Your cart is empty.</p>
        ) : (
          <div>
            <ul>
              {cart.map((product) => (
                <li
                  key={product.id}
                  className="flex justify-between items-center mb-4"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="flex-1 ml-4">
                    <p className="font-semibold">{product.title}</p>
                    <p className="text-sm">${product.price.toFixed(2)}</p>
                  </div>
                  <button
                    onClick={() => removeFromCart(product.id)}
                    className="text-red-500"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <button
                onClick={clearCart}
                className="bg-red-500 text-white p-2 rounded w-full mb-4"
              >
                Clear Cart
              </button>
              <button
                onClick={onClose}
                className="bg-gray-300 text-black p-2 rounded w-full"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;
