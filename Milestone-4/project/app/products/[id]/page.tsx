"use client";
import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import Image from "next/image";
import { toast, ToastContainer } from "react-toastify";  
import "react-toastify/dist/ReactToastify.css";  

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

async function fetchProductById(id: string): Promise<Product> {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch product");
  }
  return await response.json();
}

export default function Carddetails({
  params: paramsPromise,
}: {
  params: Promise<{ id: string }>;
}) {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { addToCart } = useCart();

  const params = React.use(paramsPromise);

  useEffect(() => {
    async function loadProduct() {
      try {
        const data = await fetchProductById(params.id);
        setProduct(data);
      } catch (err) {
        setError("Failed to load product.");
      } finally {
        setLoading(false);
      }
    }
    loadProduct();
  }, [params.id]);

  if (loading)
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  if (error)
    return <div className="flex justify-center items-center h-screen">{error}</div>;

  const handleAddToCart = () => {
    addToCart(product!);
    toast.success("Product added to cart successfully!", {
      position: "top-center",  
      autoClose: 3000,  
      hideProgressBar: false, 
      closeOnClick: true, 
      pauseOnHover: true,  
      draggable: true, 
      progress: undefined,
    });
  };

  return (
    <>
      <div className="container mx-auto p-6 bg-gradient-to-r from-blue-50 to-indigo-50 min-h-screen flex flex-col items-center">
        <h1 className="text-4xl font-extrabold text-indigo-700 mb-6 text-center">
          {product?.title}
        </h1>
        <Image
          src={product?.image ?? ""}
          alt={product?.title ?? ""}
          width={300}
          height={300}
          className="rounded-lg shadow-lg border border-gray-200 object-contain bg-white mb-6"
        />
        <p className="text-2xl font-semibold text-blue-600 mb-4">${product?.price.toFixed(2)}</p>
        <button
          onClick={handleAddToCart} 
          className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-lg font-bold shadow-md mb-6 transition duration-300"
        >
          Add to Cart
        </button>
        <p className="text-lg text-gray-700 leading-relaxed text-center max-w-2xl mb-6">
          {product?.description}
        </p>
        <p className="text-sm text-gray-500 mb-4">Category: {product?.category}</p>
        <div className="text-gray-600 text-sm mb-4">
          <span className="font-medium">Rating: {product?.rating.rate} / 5</span>
          <span className="ml-2">({product?.rating.count} reviews)</span>
        </div>
      </div>

     
      <ToastContainer
        position="top-center"  
        autoClose={3000}  
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
         
      />
    </>
  );
}
