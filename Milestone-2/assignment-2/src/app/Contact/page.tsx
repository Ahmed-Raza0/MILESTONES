import { EnvelopeIcon, HomeIcon, PhoneIcon, BriefcaseIcon } from '@heroicons/react/24/outline';
import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact Page",
}

export default function Contact() {
  return (
    <main>
      <div className="pt-16 bg-gray-100">
        <div className="pt-16 flex justify-center items-center min-h-screen py-12">
          <div className="max-w-5xl w-full text-center">
            <h1 className="text-2xl italic font-medium text-slate-900 mb-5">Contact Us</h1>
            <p className="font-light text-slate-800">Below are the details to reach out to me!</p>

            <div className="flex flex-wrap justify-between items-start mt-7 space-y-7 md:space-y-0 md:pl-10">
              <div className="w-full md:w-1/2 flex flex-col space-y-5">
                
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-sunset-500 flex justify-center items-center rounded-full text-white mr-4">
                    <HomeIcon className="w-6 h-6 text-black" />
                  </div>
                  <div className="text-base text-slate-800 font-light">
                    <h3 className="font-light text-slate-900 m-0">Address</h3>
                    <p>Mehran Town Karachi</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-10 h-10 bg-sunset-500 flex justify-center items-center rounded-full text-white mr-4">
                    <PhoneIcon className="w-6 h-6 text-black" />
                  </div>
                  <div className="text-base text-slate-800 font-light">
                    <h3 className="font-light text-slate-900 m-0">Phone Number</h3>
                    <p>+923112242143</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-10 h-10 bg-sunset-500 flex justify-center items-center rounded-full text-white mr-4">
                    <EnvelopeIcon className="w-6 h-6 text-black" />
                  </div>
                  <div className="text-base text-slate-800 font-light">
                    <h3 className="font-light text-slate-900 m-0">Email</h3>
                    <p>Ahed80174@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-10 h-10 bg-sunset-500 flex justify-center items-center rounded-full text-white mr-4">
                    <BriefcaseIcon className="w-6 h-6 text-black" />
                  </div>
                  <div className="text-base text-slate-800 font-light">
                    <h3 className="font-light text-slate-900 m-0">
                      <Link href="https://www.linkedin.com/in/ahmed-raza-6918b72b8" className="text-slate-900 no-underline">
                        LinkedIn
                      </Link>
                    </h3>
                    <p>Ahmed Raza</p>
                  </div>
                </div>

              </div>

              <div className="w-full md:w-1/2 p-5 bg-white rounded-lg shadow-lg">
                <form>
                  <h2 className="text-slate-900 text-lg text-center font-serif italic mb-5">
                    Send Message
                  </h2>
                  <div className="relative mb-7">
                    <input
                      required
                      title="Full Name"
                      placeholder="Enter your full name"
                      className="w-full p-2.5 text-base border border-gray-300 rounded-md outline-none"
                    />
                  </div>
                  <div className="relative mb-7">
                    <input
                      id="email"
                      required
                      title="Enter your email address"
                      placeholder="Enter your email address"
                      className="w-full p-2.5 text-base border border-gray-300 rounded-md outline-none"
                    />
                  </div>
                  <div className="relative mb-7">
                    <input
                      id="message"
                      required
                      title="Enter your message here"
                      placeholder="Enter your message here"
                      className="w-full p-2.5 text-base border border-gray-300 rounded-md outline-none"
                    />
                  </div>
                  <div className="relative mb-7">
                    <input
                      type="submit"
                      id="submit"
                      value="Submit"
                      className="bg-sunset-500 text-black cursor-pointer p-2.5 text-base border-2 rounded-md hover:bg-sunset-600 hover:text-gray-500"
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
