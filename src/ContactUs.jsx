import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center">
      {/* Header */}
      <div className="w-full bg-[#0c2e5d] py-10 flex justify-center">
        <button className="bg-white text-black font-bold px-10 py-4 rounded-full text-2xl shadow-xl">
          CONTACT US
        </button>
      </div>

      {/* Subtitle */}
      <p className="mt-12 text-2xl text-center font-semibold">
        Facing any Trouble? <span className="ml-1">We’re here to help you!</span>
      </p>

      {/* Centered Cards */}
      <div className="flex flex-col items-center justify-center flex-1 mt-20 mb-20">
        <div className="flex flex-col md:flex-row gap-16 items-center justify-center">
          {/* Phone Card */}
          <div className="bg-[#4b79ad] w-96 h-64 rounded-2xl shadow-2xl text-center relative flex flex-col justify-center items-center">
            <div className="absolute -top-10 bg-white p-5 rounded-full shadow-lg">
              <FaPhoneAlt size={36} className="text-black" />
            </div>
            <h3 className="mt-12 text-2xl font-bold text-white">Phone Number</h3>
            <p className="mt-4 text-xl text-white">+91 9876543210</p>
          </div>

          {/* Email Card */}
          <div className="bg-[#4b79ad] w-96 h-64 rounded-2xl shadow-2xl text-center relative flex flex-col justify-center items-center">
            <div className="absolute -top-10 bg-white p-5 rounded-full shadow-lg">
              <MdEmail size={40} className="text-black" />
            </div>
            <h3 className="mt-12 text-2xl font-bold text-white">E-mail</h3>
            <p className="mt-4 text-xl text-white">aac@grietcollege.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;