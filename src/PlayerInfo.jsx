import React, { useState } from 'react';

const PlayerInfo = () => {
  const [tab, setTab] = useState("Info");

  return (
    <div className='bg-[url(/IMG-20250711-WA0005.jpg)]'>
    <div className="flex max-w-5xl mx-auto rounded-xl overflow-hidden shadow-lg h-screen font-sans bg-white">
      {/* Left: Player Image */}
      <div className="w-1/2">
        <img
          src="https://res.cloudinary.com/dhuado5jg/image/upload/v1752604188/download_ej4vie.jpg"
          alt="Jude Bellingham"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right: Player Info */}
      <div className="w-1/2 bg-blue-100 p-8 relative flex flex-col justify-between">
        {/* Tabs */}
        <div className="absolute top-6 left-8 right-8 flex  gap-8 bg-blue-200 rounded-xl px-4 py-2 text-lg font-bold text-gray-800 shadow">
          {['Info', 'Stats', 'Health'].map((item) => (
            <button
              key={item}
              onClick={() => setTab(item)}
              className={`px-4 py-2 rounded-full ${
                tab === item ? 'bg-white text-black' : 'text-gray-600'
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Jersey Number & Name */}
        <div className="pt-24">
          <div className="flex items-center gap-4 mb-2">
            <h1 className="text-8xl text-gray-400 font-bold">10</h1>
            <h2 className="text-4xl font-bold text-black mt-8">Bellingham</h2>
          </div>

          {/* Player Details */}
          <div className="flex gap-6 text-lg text-gray-700 border-b border-gray-400 pb-2 mb-4">
            <span>Right footed</span>
            <span>CAM</span>
            <span>21 years</span>
            <span>Real Madrid</span>
          </div>

          {/* Player Description */}
         <div>
            {tab === 'Info' && (
    <p>
      The 21-year-old winger, valued at €120 million, reaches a top speed
      of 34.8 km/h and averages 82 minutes per game. He plays a key role on
      the midfield.
    </p>
  )}

  {tab === 'Stats' && (
    <ul className="list-disc pl-6 space-y-2">
      <li>Goals: 17</li>
      <li>Assists: 9</li>
      <li>Pass Accuracy: 89%</li>
      <li>Dribbles per game: 3.4</li>
      <li>Shots on target: 67%</li>
    </ul>
  )}

  {tab === 'Health' && (
    <ul className="list-disc pl-6 space-y-2">
      <li>Injury Status: Fit</li>
      <li>Last Injury: Hamstring (Feb 2025)</li>
      <li>Medical Clearance: Passed - June 2025</li>
      <li>Recovery Rate: Excellent</li>
      <li>Resting Heart Rate: 58 bpm</li>
    </ul>
  )}
         </div>
        </div>

        {/* Contact Agent */}
        <div className="absolute bottom-8 right-8">
          <button className="bg-blue-300 hover:bg-blue-400 text-black font-semibold px-6 py-3 rounded-lg shadow-lg">
            Contact Agent
          </button>
        </div>
      </div>
    </div></div>
  );
};

export default PlayerInfo;
