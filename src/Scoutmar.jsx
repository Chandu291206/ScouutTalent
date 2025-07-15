import React from 'react';
import { Link } from 'react-router-dom';

const filters = ["Age", "Position", "Nationality", "Height", "More"];

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
        <div className="text-2xl font-bold">⚽</div>
        <ul className="flex gap-8 text-lg">
          <li>Home</li>
          <li>Players</li>
          <li>Scouts</li>
          <li>Reports</li>
        </ul>
        <div className="flex gap-4 items-center">
          <span>🔍</span>
          <span>👤</span>
        </div>
      </nav>

      {/* Filters and Search */}
      <div className="flex flex-wrap gap-4 mt-6 items-center">
        <input
          type="text"
          placeholder="Search players..."
          className="px-4 py-2 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300 w-60"
        />
        {filters.map((filter) => (
          <button
            key={filter}
            className="bg-blue-200 text-black px-4 py-2 rounded-md shadow-sm text-sm"
          >
            {filter} ⌄
          </button>
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
          <div className="bg-blue-100 rounded-xl p-6 shadow-lg w-[250px] text-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg"
              alt="Ronaldo"
              className="rounded-md h-40 w-full object-cover mb-4"
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
