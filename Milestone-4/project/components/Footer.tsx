import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white text-sm w-full p-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
        <div>
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <p className="text-gray-400">
            Your one-stop shop for all your fashion needs. We provide
            high-quality products at the best prices.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="" className="hover:text-gray-400">
                Shop
              </Link>
            </li>
            <li>
              <Link href="" className="hover:text-gray-400">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="" className="hover:text-gray-400">
                About Us
              </Link>
            </li>
            <li>
              <Link href="" className="hover:text-gray-400">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-400">Email: support@mycompany.com</p>
          <p className="text-gray-400">Phone: +92 (000) 000-0000</p>
          <p className="text-gray-400">
            Address: 123 Shopping St., City, Country
          </p>
        </div>
      </div>

      <hr className="my-6 border-gray-700" />

      <div className="flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-400">
          &copy; 2024 My Company. All rights reserved. Created by Ahmed Raza.
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link href="#" className="hover:text-gray-400">
            <i className="fab fa-facebook"></i> Facebook
          </Link>
          <Link href="#" className="hover:text-gray-400">
            <i className="fab fa-twitter"></i> Twitter
          </Link>
          <Link href="#" className="hover:text-gray-400">
            <i className="fab fa-instagram"></i> Instagram
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
