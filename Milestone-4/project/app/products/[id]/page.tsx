"use client";

import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import Image from "next/image";

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

export default function Carddetails({ params: paramsPromise }: { params: Promise<{ id: string }> }) {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { addToCart } = useCart();

  // Unwrap `params` using React.use()
  const params = React.use(paramsPromise);

  useEffect(() => {
    async function loadProduct() {
      try {
        const data = await fetchProductById(params.id); // Access `id` here
        setProduct(data);
      } catch (err) {
        setError("Failed to load product.");
      } finally {
        setLoading(false);
      }
    }
    loadProduct();
  }, [params.id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container bg-white mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">{product?.title}</h1>
      <Image
        src={product?.image ?? ''}
        alt={product?.title ?? ''}
        width={300}
        height={300}
        className="w-fit h-96 object-cover mx-auto rounded mb-4"
      />
      <p className="text-lg text-center mb-4">${product?.price.toFixed(2)}</p>
      <button
        onClick={() => {
          addToCart(product!);
          alert("Product added to cart successfully");
        }}
        className="text-white border  border-blue-400 p-3 bg-blue-500 hover:bg-blue-600 rounded-lg w-full text-center font-semibold mb-4 transition duration-300 ease-in-out"
      >
        Add to Cart
      </button>
      <p className="text-gray-700 mx-10 text-center mb-4">{product?.description}</p>
      <p className="text-gray-500 text-sm text-center mx-10 mb-4">Category: {product?.category}</p>
      <div className="text-gray-600 text-sm text-center mx-10 mb-4">
        <span>Rating: {product?.rating.rate} / 5</span>
        <span> ({product?.rating.count} reviews)</span>
      </div>
    </div>
  );
}
