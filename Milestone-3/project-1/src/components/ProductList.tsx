import Link from "next/link";
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

async function fetchProductList() {
  const response = await fetch("https://fakestoreapi.com/products");
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  return await response.json();
}

export default async function ProductList() {
  const products = await fetchProductList();

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Our Products
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}
function ProductCard({ product }: { product: Product }) {
  const maxDescriptionLength = 120;
  const description =
    product.description.length > maxDescriptionLength
      ? product.description.substring(0, maxDescriptionLength) + "..."
      : product.description;

  return (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden group transform hover:scale-105 transition-all duration-300 ease-in-out">
      <div className="relative">
        <Image
          src={product.image}
          alt={product.title}
          width={300}
          height={300}
          className="w-[300px] h-[300px] object-cover group-hover:scale-105 transition-all duration-300 ease-in-out"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex items-center justify-center">
          <p className="text-white text-xl font-semibold">{product.title}</p>
        </div>
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">{product.title}</h2>
        <p className="text-lg text-gray-700 mb-4">{description}</p>
        <div className="flex justify-between items-center mb-4">
          <p className="text-xl font-bold text-green-500">${product.price.toFixed(2)}</p>
          <div className="text-yellow-400 flex items-center">
            <span className="mr-1">{product.rating.rate}</span>
            <span>&#9733;</span>
          </div>
        </div>
        <Link
          href={`./products/${product.id}`}
          className="inline-block w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-6 text-center rounded-lg transition-transform duration-200 hover:scale-105"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
