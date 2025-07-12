import React, { useState } from 'react';
import {
  Home,
  User,
  Handshake,
  Mail
} from 'lucide-react';

const initialPlayers = [
  {
    id: 1,
    name: 'Kylian Mbappe',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Kylian_Mbapp%C3%A9_2019.jpg',
    marketed: false
  },
  {
    id: 2,
    name: 'Erling Halland',
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/75/Erling_Haaland_%28cropped%29.jpg',
    marketed: false
  },
  {
    id: 3,
    name: 'Julian Alvarez',
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/0d/Julian_Alvarez_2022.jpg',
    marketed: true
  },
  {
    id: 4,
    name: 'Kevin de bruyne',
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Kevin_De_Bruyne_2021.jpg',
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
      {/* Sidebar */}
      <aside className="bg-[#0f2343] text-white w-56 p-6 space-y-6 rounded-r-3xl">
        <div className="flex flex-col space-y-6">
          <div className="flex items-center space-x-3">
            <Home />
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
        <h1 className="text-3xl font-bold mb-6">Players</h1>
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
