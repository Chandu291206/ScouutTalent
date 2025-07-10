import React from 'react'
import { useState } from 'react';

const PlayerInfo = () => {
    const [tab, setTab] = useState("Info");
  return (
       <div className="flex h-screen font-sans">
      {/* Player Image */}
      <div className="w-1/2 bg-cover bg-center rounded-r-[2rem]"
           style={{
             backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/5/58/Jude_Bellingham_2023.jpg')"
           }}>
      </div>

      {/* Player Info */}
      <div className="w-1/2 bg-blue-50 p-8 relative flex flex-col justify-between">
        {/* Tabs */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-white rounded-full flex shadow-lg overflow-hidden">
          {['Info', 'Stats', 'Health'].map((item) => (
            <button
              key={item}
              onClick={() => setTab(item)}
              className={`px-6 py-2 text-sm font-medium ${
                tab === item ? 'text-black' : 'text-gray-400'
              }`}
            >
              {item}
            </button>
          ))}
        </div>
          {/* Jersey Number & Name */}
        <div className="pt-16">
          <h1 className="text-7xl font-bold text-gray-300 -mb-4">10</h1>
          <h2 className="text-2xl font-bold text-black">Bellingham</h2>

          {/* Quick Attributes */}
          <div className="flex items-center space-x-4 mt-4 text-sm text-gray-700 border-b pb-2 border-gray-300">
            <span>Right footed</span>
            <span>CAM</span>
            <span>21 years</span>
            <span>Real Madrid</span>
          </div>

          {/* Description */}
          <p className="mt-6 text-lg text-gray-800 leading-relaxed">
            The 21-year-old winger, valued at €120 million, reaches a top speed
            of 34.8 km/h and averages 82 minutes per game. He plays a key role on
            the midfield.
          </p>
        </div>

        {/* CTA */}
        <div className="text-right">
          <button className="bg-indigo-300 hover:bg-indigo-400 text-black font-semibold px-6 py-2 rounded-lg shadow">
            Contact Agent
          </button>
        </div>
      </div>
    </div>


  )
}

export default PlayerInfo
