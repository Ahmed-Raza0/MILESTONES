import Link from "next/link";
import Image from "next/image";
import AuthButton from "./header-auth";
import { Button } from "./ui/button";
import { signOutAction } from "@/app/actions";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 shadow-lg">
      <nav className="flex justify-between items-center p-4 relative max-w-screen-xl mx-auto">
        {/* Logo Section */}
        <div className="text-white text-3xl font-semibold flex items-center space-x-3">
          <Image
            src="/images/shop.png"
            alt="ShopMate Logo"
            width={50}
            height={50}
            className="rounded-full"
          />
          <span className="text-2xl font-extrabold tracking-wide">
            ShopMate
          </span>
        </div>
 
        <input type="checkbox" id="menu-toggle" className="hidden peer" />
        <label
          htmlFor="menu-toggle"
          className="text-white text-4xl cursor-pointer md:hidden absolute right-6 top-6"
        >
          &#9776;
        </label>

    
        <ul className="flex-col list-none md:flex md:flex-row md:static absolute right-4 top-[70px] bg-gray-800 md:bg-transparent w-48 md:w-auto p-4 md:p-0 hidden peer-checked:flex z-10 rounded-md shadow-lg md:shadow-none">
          <li className="md:ml-6">
            <Link
              href="/"
              className="text-white block py-2 px-4 hover:bg-indigo-600 hover:shadow-md rounded-md transition-all duration-300"
            >
              Home
            </Link>
          </li>

          <li className="md:ml-6 mt-2 md:mt-0">
            <Link
              href="#"
              className="text-white block py-2 px-4 hover:bg-indigo-600 hover:shadow-md rounded-md transition-all duration-300"
            >
              Contact
            </Link>
          </li>

          
          <li className="md:ml-6 mt-2 md:mt-0 flex flex-col md:flex-row">
            <AuthButton />
          </li>
        </ul>
      </nav>
    </header>
  );
}
