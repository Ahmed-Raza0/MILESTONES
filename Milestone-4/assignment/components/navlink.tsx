// components/Navbar.tsx

'use client';
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-lg">
          <Link href="/">My Blog</Link>
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link href="/blog/home" className="text-gray-300 hover:text-white">
              Home
            </Link>
          </li>
          <li>
            <Link href="/blog/edit" className="text-gray-300 hover:text-white">
              Edit
            </Link>
          </li>
          <li>
            <Link href="/blog/create" className="text-gray-300 hover:text-white">
              Create
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
