import React, { useState } from 'react';
import { Home, User, Handshake, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const initialPlayers = [
  {
    id: 1,
    name: 'Kylian Mbappe',
    image: 'https://res.cloudinary.com/dhuado5jg/image/upload/v1752591481/download_t9jdvd.jpg',
    marketed: false,
  },
  {
    id: 2,
    name: 'Erling Halland',
    image: 'https://res.cloudinary.com/dhuado5jg/image/upload/v1752591513/download_i3r7tj.jpg',
    marketed: false,
  },
  {
    id: 3,
    name: 'Julian Alvarez',
    image: 'https://res.cloudinary.com/dhuado5jg/image/upload/v1752591590/download_wrmuua.jpg',
    marketed: true,
  },
  {
    id: 4,
    name: 'Kevin De Bruyne',
    image: 'https://res.cloudinary.com/dhuado5jg/image/upload/v1752602465/download_rrnqrp.jpg',
    marketed: true,
  },
];

export default function PlayerList() {
  const [players, setPlayers] = useState(initialPlayers);

  const toggleMarket = (id) => {
    setPlayers((prevPlayers) =>
      prevPlayers.map((player) =>
        player.id === id ? { ...player, marketed: !player.marketed } : player
      )
    );
  };

  return (
    <div className="flex min-h-screen bg-white font-[Buenard]">
      {/* Sidebar */}
      <aside className="bg-[#0f2343] text-white w-64 py-10 px-6 flex flex-col justify-between">
        <div>
          <Link to="/" className="flex items-center gap-2 mb-10">
        <img src="https://res.cloudinary.com/dhuado5jg/image/upload/v1753204336/WhatsApp_Image_2025-07-22_at_22.41.44_f1d2277a-removebg-preview_crjayb.png" alt="Logo" className=" h-10 rounded-full" />
            <p className="text-xl font-bold">ScoutTalent</p>
          </Link>

          <nav className="space-y-6 text-lg">
            <div className="flex items-center space-x-3 hover:text-blue-300 transition">
              <Home />
              <span>Dashboard</span>
            </div>
            <div className="flex items-center space-x-3 hover:text-blue-300 transition">
              <User />
              <span>Players</span>
            </div>
            <div className="flex items-center space-x-3 hover:text-blue-300 transition">
              <Handshake />
              <span>Contracts</span>
            </div>
            <div className="flex items-center space-x-3 hover:text-blue-300 transition">
              <Mail />
              <span>Inbox</span>
            </div>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 px-10 py-10">
        <h1 className="text-5xl font-bold mb-10 border-b-4 border-blue-200 inline-block pb-2">
          Players
        </h1>

        <div className="space-y-8">
          {players.map((player) => (
            <div
              key={player.id}
              className="flex justify-between items-center border-b border-gray-300 pb-4"
            >
              <div className="flex items-center space-x-6">
                <img
                  src={player.image}
                  alt={player.name}
                  className="w-24 h-24 rounded-full object-cover"
                />
                <span className="text-2xl font-semibold">{player.name}</span>
              </div>
              <button
                onClick={() => toggleMarket(player.id)}
                className="w-60 text-center bg-blue-300 text-black px-4 py-3 rounded-lg hover:bg-blue-400 transition-colors duration-300 text-lg"
              >
                {player.marketed ? 'Delete from market' : 'Add to market'}
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}