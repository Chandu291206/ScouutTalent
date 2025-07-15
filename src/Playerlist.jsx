import React, { useState } from 'react';
import {
  Home,
  User,
  Handshake,
  Mail
} from 'lucide-react';
import { Link } from 'react-router-dom';

const initialPlayers = [
  {
    id: 1,
    name: 'Kylian Mbappe',
    image: 'https://res.cloudinary.com/dhuado5jg/image/upload/v1752591481/download_t9jdvd.jpg',
    marketed: false
  },
  {
    id: 2,
    name: 'Erling Halland',
    image: 'https://res.cloudinary.com/dhuado5jg/image/upload/v1752591513/download_i3r7tj.jpg',
    marketed: false
  },
  {
    id: 3,
    name: 'Julian Alvarez',
    image: 'https://res.cloudinary.com/dhuado5jg/image/upload/v1752591590/download_wrmuua.jpg',
    marketed: true
  },
  {
    id: 4,
    name: 'Kevin de bruyne',
    image: 'https://res.cloudinary.com/dhuado5jg/image/upload/v1752602465/download_rrnqrp.jpg',
    marketed: true
  }
];

export default function PlayerList() {
  const [players, setPlayers] = useState(initialPlayers);

  const toggleMarket = (id) => {
    setPlayers(players.map(player =>
      player.id === id ? { ...player, marketed: !player.marketed } : player
    ));
  };

  return (
    <div className="flex min-h-screen bg-[url(/IMG-20250711-WA0006.jpg)] bg-no-repeat bg-cover bg-center">
      <header className="bg-[#19325F] text-white  items-center ">
                    <Link to="/">
                    <div className='absolute left-4 top-4 flex flex-row'>
                    <img src="" alt="logo" />
                    <p>ScoutTalent</p>
                    </div></Link>
                  </header>
      {/* Sidebar */}
      <aside className="bg-[#0f2343] text-white w-56 mt-16 p-8 space-y-6 rounded-r-3xl">
        <div className="flex flex-col space-y-8">
          <div className="flex items-center space-x-3">
            <Home/>
            <span>Dashboard</span>
          </div>
          <div className="flex items-center space-x-3">
            <User />
            <span>Players</span>
          </div>
          <div className="flex items-center space-x-3">
            <Handshake />
            <span>Contracts</span>
          </div>
          <div className="flex items-center space-x-3">
            <Mail />
            <span>Inbox</span>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 px-10 py-8">
        <h1 className="text-3xl font-bold mt-8 mb-6">Players</h1>
        <div className="space-y-6">
          {players.map(player => (
            <div
              key={player.id}
              className="flex justify-between items-center border-b border-gray-300 pb-4"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={player.image}
                  alt={player.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <span className="text-lg">{player.name}</span>
              </div>
              <button
                onClick={() => toggleMarket(player.id)}
                className="bg-blue-300 text-black px-4 py-2 rounded-lg hover:bg-blue-400 transition-colors duration-300"
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
