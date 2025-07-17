import React from 'react'
import { Users, Globe, Star } from "lucide-react";

const About = () => {
  return (
      
    <div className=" bg-white p-8 md:p-12 text-gray-800 h-full flex flex-col justify-center">
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

  )}
export default About
