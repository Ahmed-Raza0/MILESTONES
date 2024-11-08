import Link from "next/link";

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
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center mb-8">Product List</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product: any) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}

function ProductCard({ product }: { product: any }) {
  const maxDescriptionLength = 100;
  const description =
    product.description.length > maxDescriptionLength
      ? product.description.substring(0, maxDescriptionLength) + "..."
      : product.description;

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:scale-105 transition-transform duration-200">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-cover rounded-t-lg mb-4"
      />
      <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
      <p className="text-green-600 text-lg font-bold mb-2">
        ${product.price.toFixed(2)}
      </p>
      <p className="text-gray-700 mb-4">{description}</p>
      <Link href={`./products/${product.id}`} className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-200 border border-blue-500">
    Add to Cart
</Link>
    </div>
  );
}