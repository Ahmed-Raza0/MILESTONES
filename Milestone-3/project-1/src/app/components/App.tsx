'use client';
import React, { useState, useEffect } from 'react';
import { CartProvider } from '../context/CartContext';  // Import CartProvider
import HeaderMain from './MainHeader';  
import Carddetails from '../products/[id]/page';  // Carddetails component

export default function App({ params }: { params: { id: string } }) {
  const [cart, setCart] = useState<any[]>([]); // Global cart state

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  return (
    <CartProvider>
      {/* Pass cart and setCart to HeaderMain */}
      <HeaderMain cartCount={cart.length} cart={cart} setCart={setCart} />
      <Carddetails params={params} />
    </CartProvider>
  );
}
