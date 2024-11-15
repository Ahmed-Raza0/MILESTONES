'use client';

import React from 'react';
import { useCart } from '../context/CartContext'; 

const CartPage = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  if (cart.length === 0) {
    return <div>Your cart is empty</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Your Cart</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cart.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-lg p-6">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover rounded-t-lg mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
            <p className="text-green-600 text-lg font-bold mb-2">
              ${product.price.toFixed(2)}
            </p>
            <button
              onClick={() => removeFromCart(product.id)}
              className="bg-red-500 text-white p-2 rounded"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <button
        onClick={clearCart}
        className="bg-blue-500 text-white p-3 rounded mt-4"
      >
        Clear Cart
      </button>
    </div>
  );
};

export default CartPage;
