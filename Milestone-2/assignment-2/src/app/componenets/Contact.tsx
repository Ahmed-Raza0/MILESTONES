import {
    EnvelopeIcon,
    HomeIcon,
    PhoneIcon,
    BriefcaseIcon,
  } from '@heroicons/react/24/outline';
  import Link from 'next/link';
  
  export default function Contact() {
    return (
      <main>
        <div className="pt-16 bg-gradient-to-b from-indigo-50 via-white to-indigo-100">
          <div className="pt-16 flex justify-center items-center min-h-screen py-12">
            <div className="max-w-5xl w-full text-center">
              <h1 className="text-3xl italic font-semibold text-indigo-900 mb-5">
                Contact Us
              </h1>
              <p className="font-light text-indigo-700">
                Below are the details to reach out to me!
              </p>
              <div className="flex flex-wrap justify-between items-start mt-10 space-y-7 md:space-y-0 md:pl-10">
                <div className="w-full md:w-1/2 flex flex-col space-y-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-indigo-600 flex justify-center items-center rounded-full text-white mr-4">
                      <HomeIcon className="w-6 h-6" />
                    </div>
                    <div className="text-base text-indigo-800 font-light">
                      <h3 className="font-medium text-indigo-900">Address</h3>
                      <p>Mehran Town, Karachi</p>
                    </div>
                  </div>
  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-indigo-600 flex justify-center items-center rounded-full text-white mr-4">
                      <PhoneIcon className="w-6 h-6" />
                    </div>
                    <div className="text-base text-indigo-800 font-light">
                      <h3 className="font-medium text-indigo-900">Phone Number</h3>
                      <p>+923112242143</p>
                    </div>
                  </div>
  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-indigo-600 flex justify-center items-center rounded-full text-white mr-4">
                      <EnvelopeIcon className="w-6 h-6" />
                    </div>
                    <div className="text-base text-indigo-800 font-light">
                      <h3 className="font-medium text-indigo-900">Email</h3>
                      <p>Ahed80174@gmail.com</p>
                    </div>
                  </div>
  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-indigo-600 flex justify-center items-center rounded-full text-white mr-4">
                      <BriefcaseIcon className="w-6 h-6" />
                    </div>
                    <div className="text-base text-indigo-800 font-light">
                      <h3 className="font-medium text-indigo-900">
                        <Link
                          href="https://www.linkedin.com/in/ahmed-raza-6918b72b8"
                          className="text-indigo-900 hover:underline"
                        >
                          LinkedIn
                        </Link>
                      </h3>
                      <p>Ahmed Raza</p>
                    </div>
                  </div>
                </div>
  
                <div className="w-full md:w-1/2 p-8 bg-white rounded-lg shadow-lg">
                  <form>
                    <h2 className="text-indigo-900 text-xl text-center font-serif italic mb-5">
                      Send Message
                    </h2>
                    <div className="relative mb-6">
                      <input
                        required
                        placeholder="Enter your full name"
                        className="w-full p-3 text-base border border-gray-300 rounded-lg outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                      />
                    </div>
                    <div className="relative mb-6">
                      <input
                        type="email"
                        required
                        placeholder="Enter your email address"
                        className="w-full p-3 text-base border border-gray-300 rounded-lg outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                      />
                    </div>
                    <div className="relative mb-6">
                      <textarea
                        required
                        placeholder="Enter your message here"
                        className="w-full p-3 text-base border border-gray-300 rounded-lg outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                      />
                    </div>
                    <div className="relative">
                      <input
                        type="submit"
                        value="Submit"
                        className="w-full p-3 text-lg font-medium text-white bg-indigo-600 rounded-lg cursor-pointer hover:bg-indigo-700"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
  