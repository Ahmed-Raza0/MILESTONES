'use client';

 
import Link from 'next/link';
import { useState, ChangeEvent, FormEvent } from 'react';

const Footer = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState('');

  // Handle input change
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus('');

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setFormStatus('Your message has been sent successfully!');
        setFormData({ name: '', email: '', message: '' }); // Clear the form
      } else {
        setFormStatus(result.error || 'Something went wrong.');
      }
    } catch (error) {
      setFormStatus('An error occurred while sending the message.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 text-white text-sm w-full p-8">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* About Us Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-100">About Us</h3>
          <p className="text-gray-300">
            Your one-stop shop for all your fashion needs. We provide high-quality products at the best prices.
          </p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-100">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-gray-200 transition duration-300">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gray-200 transition duration-300">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-gray-200 transition duration-300">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-gray-200 transition duration-300">
                FAQ
              </Link>
              </li>
            </ul>
        </div>

        {/* Contact Us Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-100">Contact Us</h3>
          <p className="text-gray-300">Email: support@mycompany.com</p>
          <p className="text-gray-300">Phone: +92 (000) 000-0000</p>
          <p className="text-gray-300">Address: 123 Shopping St., City, Country</p>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="mt-8 text-center md:text-left">
        <h3 className="text-xl font-semibold mb-4 text-gray-100">Get in Touch</h3>

        {/* Form submission feedback */}
        {formStatus && (
          <div className={`p-4 mb-4 rounded-md ${formStatus.includes('success') ? 'bg-green-500' : 'bg-red-500'}`}>
            <p className="text-white">{formStatus}</p>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300">Your Name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your name"
              className="w-full p-3 mt-2 text-gray-900 bg-white rounded-md"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">Your Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 mt-2 text-gray-900 bg-white rounded-md"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300">Your Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message"
              className="w-full p-3 mt-2 text-gray-900 bg-white rounded-md"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 mt-4 rounded-md ${isSubmitting ? 'bg-gray-500' : 'bg-indigo-700 hover:bg-indigo-800'} text-white transition duration-300`}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>

      <hr className="my-6 border-gray-700" />

      {/* Bottom Section (Copyright and Social Links) */}
      <div className="flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-300 text-center md:text-left">
          &copy; 2024 My Company. All rights reserved. Created by Ahmed Raza.
        </p>
        <div className="flex space-x-6 mt-4 md:mt-0 justify-center md:justify-start">
          <Link href="#" className="hover:text-gray-200 text-2xl transition duration-300">
            <i className="fab fa-facebook"></i>
          </Link>
          <Link href="#" className="hover:text-gray-200 text-2xl transition duration-300">
            <i className="fab fa-twitter"></i>
          </Link>
          <Link href="#" className="hover:text-gray-200 text-2xl transition duration-300">
            <i className="fab fa-instagram"></i>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
