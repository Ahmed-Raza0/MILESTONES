

import type { NextApiRequest, NextApiResponse } from 'next';

interface CartItem {
  id: string;
  quantity: number;
}

let cart: CartItem[] = []; // Temporary in-memory cart for demonstration

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // Return the current cart state
    return res.status(200).json(cart);
  }

  if (req.method === 'POST') {
    const { product } = req.body;

    if (!product || !product.id) {
      return res.status(400).json({ message: 'Invalid product data' });
    }

    // Check if the product already exists in the cart
    const existingProductIndex = cart.findIndex((item) => item.id === product.id);
    if (existingProductIndex !== -1) {
      // If product exists, increase its quantity
      cart[existingProductIndex].quantity += 1;
    } else {
      // If product doesn't exist, add it to the cart
      cart.push({ ...product, quantity: 1 });
    }

    return res.status(200).json(cart); // Return updated cart
  }

  if (req.method === 'DELETE') {
    const { productId } = req.body;
    cart = cart.filter((item) => item.id !== productId);
    return res.status(200).json(cart); // Return updated cart
  }

  // If method is not supported
  res.status(405).json({ message: 'Method Not Allowed' });
}
