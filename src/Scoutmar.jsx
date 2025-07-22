import React from 'react';
import { Link } from 'react-router-dom';

const filters = [
  { label: "Age", options: ["18-25", "26-30", "31-40"] },
  { label: "Position", options: ["Striker", "Midfielder", "Defender", "Goalkeeper"] },
  { label: "Nationality", options: ["Portugal", "Brazil", "France", "Argentina"] },
  { label: "Height", options: ["< 5'8", "5'9 - 6'0", "> 6'1"] },
  { label: "More", options: ["Captain", "Top Scorer", "New"] }
];

const players = [
  { id: 1, src: "https://res.cloudinary.com/dhuado5jg/image/upload/v1752591401/download_wjlepz.jpg" },
  { id: 2, src: "https://res.cloudinary.com/dhuado5jg/image/upload/v1752591481/download_t9jdvd.jpg" },
  { id: 3, src: "https://res.cloudinary.com/dhuado5jg/image/upload/v1752591513/download_i3r7tj.jpg" },
  { id: 4, src: "https://res.cloudinary.com/dhuado5jg/image/upload/v1752591661/download_dj36ge.jpg" },
  { id: 5, src: "https://res.cloudinary.com/dhuado5jg/image/upload/v1752592128/download_hxpd9w.jpg" },
  { id: 6, src: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg" }
];

const hexagonClip = {
  clipPath: 'polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)'
};

const Scoutmar = () => {
  return (
    <div className="bg-green-50 min-h-screen p-6 font-sans">
      {/* Navbar */}
      <nav className="bg-[#13294B] text-white p-3 flex items-center justify-between rounded-xl px-6">
        <Link to="/">
          <div className="bg-[#1a2b44] flex items-center px-3 py-1">
            <img src="https://res.cloudinary.com/dhuado5jg/image/upload/v1753204336/WhatsApp_Image_2025-07-22_at_22.41.44_f1d2277a-removebg-preview_crjayb.png" alt="Logo" className="w-10 h-10 rounded-full" />
            <p className="ml-2 font-semibold">ScoutTalent</p>
          </div>
        </Link>
        <ul className="flex gap-8 text-lg py-2">
          <li>Home</li>
          <li className="font-bold underline">Players</li>
          <li>Scouts</li>
          <li>Reports</li>
        </ul>
      </nav>

      {/* Filters and Search */}
      <div className="flex flex-wrap gap-4 mt-6 items-center justify-center">
        <input
          type="text"
          placeholder="Search players..."
          className="px-4 py-2 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300 w-72"
        />
        {filters.map((filter, idx) => (
          <select
            key={idx}
            className="bg-blue-100 text-black px-4 py-2 rounded-md shadow-sm text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            <option value="">{filter.label}</option>
            {filter.options.map((option, i) => (
              <option key={i} value={option}>{option}</option>
            ))}
          </select>
        ))}
      </div>

      {/* Main Content */}
      <div className="mt-10 flex flex-col md:flex-row justify-between items-start gap-10">
        {/* Hexagon Grid */}
        <div className="flex flex-wrap gap-4 max-w-[420px] ml-10 justify-center">
          {players.map((player) => (
            <div
              key={player.id}
              className="w-[100px] aspect-[1.1547] bg-black overflow-hidden flex items-center justify-center transition-transform duration-300 hover:scale-105"
              style={hexagonClip}
            >
              <img
                src={player.src}
                alt="player"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Player Card */}
        <Link to="/PlayerInfo">
          <div className="bg-white border border-gray-200 rounded-2xl shadow-lg w-[350px] p-6 text-center hover:shadow-xl transition-all">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg"
              alt="Cristiano Ronaldo"
              className="rounded-xl h-64 w-full object-cover mb-4"
            />
             <div className="text-lg font-bold">RONALDO</div>
            <div className="flex justify-between mt-1 text-sm font-semibold">
              <span>40</span>
              <span>Striker</span>
            </div>
            <hr className="my-2" />
            <div className="text-sm">Al Nasser</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Scoutmar;