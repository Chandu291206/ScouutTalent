import React from 'react'
import { Link } from 'react-router-dom'; 

const filters = ["Age", "Position", "Nationality", "Height", "More"];

const players = [
  { id: 1, src: "/players/messi.png" },
  { id: 2, src: "/players/mbappe.png" },
  { id: 3, src: "/players/haaland.png" },
  { id: 4, src: "/players/kdb.png" },
  { id: 5, src: "/players/grealish.png" },
  { id: 6, src: "/players/ronaldo.png" }
];


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
        <div className="flex flex-wrap gap-2 max-w-[420px] ml-10">
          {players.map((player, index) => (
            <div
              key={player.id}
              className="w-[100px] h-[90px] bg-black clip-hexagon overflow-hidden"
            >
              <img
                src={player.src}
                alt="player"
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
         {/* Player Card */}
         <Link to="/PlayerInfo">
        <div className="bg-blue-100 rounded-xl p-6 shadow-lg w-[250px] text-center">
          <img
            src="/players/ronaldo.png"
            alt="Ronaldo"
            className="rounded-md h-40 w-full object-cover mb-4"
          />
          <div className="text-lg font-bold">RONALDO</div>
          <div className="flex justify-between mt-1 text-sm font-semibold">
            <span>40</span>
            <span>Striker</span>
          </div>
          <hr className="my-2" />
          <div className="text-sm">Al nasser</div>
        </div>
        </Link>
        
      </div>
    </div>


  )
}

export default Scoutmar
