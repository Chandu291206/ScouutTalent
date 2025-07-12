import React, { useState } from 'react';

const PlayerInfo = () => {
  const [tab, setTab] = useState("Info");

  return (
    <div className='bg-[url(/IMG-20250711-WA0005.jpg)]'>
    <div className="flex max-w-5xl mx-auto rounded-xl overflow-hidden shadow-lg h-screen font-sans bg-white">
      {/* Left: Player Image */}
      <div className="w-1/2">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/58/Jude_Bellingham_2023.jpg"
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
          <p className="mt-6 text-xl text-gray-800 leading-relaxed">
            The 21-year-old winger, valued at €120 million, reaches a top speed
            of 34.8 km/h and averages 82 minutes per game. He plays a key role on
            the midfield.
          </p>
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
