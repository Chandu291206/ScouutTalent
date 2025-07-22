import React from 'react'
import { Users, Globe, Star } from "lucide-react";
import { Link } from 'react-router-dom';

const About = () => {
  return (
      <>
       <header className="bg-[#19325F] text-white fixed top-0 left-0 w-full py-5 z-30 shadow">
        <Link to="/">
          <div className="ml-4 flex items-center gap-2">
            <img src="https://res.cloudinary.com/dhuado5jg/image/upload/v1753204336/WhatsApp_Image_2025-07-22_at_22.41.44_f1d2277a-removebg-preview_crjayb.png" alt="logo" className="h-12" />
            <p className="text-white font-semibold text-lg">ScoutTalent</p>
          </div>
        </Link>
      </header>
    <div className=" bg-white p-8 md:p-12 text-gray-800 h-full flex flex-col justify-center mt-16">
      
      <div className="mb-6 " >
        <h1 className="text-4xl font-bold mb-2 text-gray-800">About Us</h1>
        <p className="text-gray-600">
          Revolutionizing football scouting with data, precision, and smart tools.
        </p>
      </div>

      <div className="grid gap-6">
        <div className="bg-blue-50 p-4 rounded-xl shadow-sm flex items-start gap-4">
          <Globe className="text-blue-600 w-6 h-6 mt-1" />
          <div>
            <h2 className="font-semibold text-lg">Global Player Insights</h2>
            <p className="text-sm text-gray-600">
              Access player data from leagues across the world with filters for age, position, value, and more.
            </p>
          </div>
        </div>

        <div className="bg-purple-50 p-4 rounded-xl shadow-sm flex items-start gap-4">
          <Star className="text-purple-600 w-6 h-6 mt-1" />
          <div>
            <h2 className="font-semibold text-lg">Custom Scoring System</h2>
            <p className="text-sm text-gray-600">
              Objectively rank players using league strength, team competitiveness, and performance metrics.
            </p>
          </div>
        </div>

        <div className="bg-green-50 p-4 rounded-xl shadow-sm flex items-start gap-4">
          <Users className="text-green-600 w-6 h-6 mt-1" />
          <div>
            <h2 className="font-semibold text-lg">Built for Scouts</h2>
            <p className="text-sm text-gray-600">
              Save searches, register as a scout, and evaluate talent with precision and speed.
            </p>
          </div>
        </div>
      </div>

      <p className="mt-6 text-sm text-gray-500 italic">
        Whether you're finding the next Ronaldo or building your dream squad, our platform gives you the edge.
      </p>
    </div>
    <footer className="bg-[#19325F] text-white p-6 text-sm">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <p className="font-semibold mb-2">Tools</p>
              <ul className="space-y-1">
                <li>Player Analyser</li>
                <li>Match Records</li>
                <li>Communication</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold mb-2">Apps</p>
              <ul className="space-y-1">
                <li>Play Store</li>
                <li>App Store</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold mb-2">Resources</p>
              <ul className="space-y-1">
                <li>Documentation</li>
                <li>Free Demo</li>
                <li>Press Conference</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold mb-2">Legal</p>
              <ul className="space-y-1">
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
                <li>Cookies</li>
              </ul>
            </div>
          </div>
          <hr className="my-4 border-gray-400" />
          <div className="flex justify-between items-center flex-wrap gap-4">
            <p>©2025 griet.aac.in • All rights reserved</p>
            <div className="flex gap-4 text-lg">
              <i className="fab fa-facebook hover:text-blue-400"></i>
              <i className="fab fa-twitter hover:text-sky-400"></i>
              <i className="fab fa-instagram hover:text-pink-400"></i>
            </div>
          </div>
        </footer>
    </>

  )}
export default About
