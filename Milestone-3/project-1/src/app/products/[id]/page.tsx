"use client";

import React, { useEffect, useState } from "react";
import { useCart } from "../../context/CartContext";

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

export default function Carddetails({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<Product | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { addToCart } = useCart();

  useEffect(() => {
    if (params.id) {
      fetchProductById(params.id)
        .then((data) => setProduct(data))
        .catch((error) => {
          console.error("Error fetching product:", error);
          setError("Product not found or an error occurred.");
        });
    }
  }, [params.id]);

  if (error) return <div>{error}</div>;
  if (!product) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">{product.title}</h1>
      <img
        src={product.image}
        alt={product.title}
        className="w-fit h-96 object-cover mx-auto rounded mb-4"
      />
      <p className="text-lg text-center mb-4">${product.price.toFixed(2)}</p>
      <button
        onClick={() => addToCart(product)} // Add to cart logic here
        className="text-white border border-blue-400 p-3 bg-blue-500 hover:bg-blue-600 rounded-lg w-full text-center font-semibold mb-4 transition duration-300 ease-in-out"
      >
        Add to Cart
      </button>
      <p className="text-gray-700 mb-4">{product.description}</p>
      <p className="text-gray-500 text-sm mb-4">Category: {product.category}</p>
      <div className="text-gray-600 text-sm mb-4">
        <span>Rating: {product.rating.rate} / 5</span>
        <span> ({product.rating.count} reviews)</span>
      </div>
    </div>
  );
}
