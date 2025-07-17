import { useState } from 'react'
import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom'
import UploadCard from './UploadCard';
import About from './About';

const players = [
  {
    name: "Lionel Messi",
    position: "Forward",
    club: "Inter Miami",
    logo: "https://res.cloudinary.com/dhuado5jg/image/upload/v1752773027/download-removebg-preview_6_sws593.png",
  },
  {
    name: "Kylian Mbappé",
    position: "Forward",
    club: "Real Madrid",
    logo: "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg",
  },
  {
    name: "Kevin De Bruyne",
    position: "Midfielder",
    club: "Manchester City",
    logo: "https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg",
  },
  {
    name: "Virgil van Dijk",
    position: "Defender",
    club: "Liverpool",
    logo: "https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg",
  },
  {
    name: "Thibaut Courtois",
    position: "Goalkeeper",
    club: "Real Madrid",
    logo: "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg",
  },
  {
    name: "Jude Bellingham",
    position: "Midfielder",
    club: "Real Madrid",
    logo: "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg",
  },
];

function App() {
  return (
    <>
      <div className="min-h-screen  bg-cover bg-center">
        <header className=" bg-[#19325F] text-white p-6 flex flex-col items-center relative shadow-md">
          <div className="absolute right-6 top-4 flex gap-6 text-sm">
            <Link to="/login" className="hover:underline">Login</Link>
            <Link to="/register" className="hover:underline">Signup</Link>
          </div>
          <Link to="/">
            <div className="absolute left-6 top-4 flex items-center gap-2">
              <img src="/logo192.png" alt="ScoutTalent logo" className="h-8" />
              <p className="font-bold text-lg">ScoutTalent</p>
            </div>
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-center mt-6">Discover the Next Football Superstar</h1>
        </header>

        <main className="flex flex-col  bg-white/80 backdrop-blur-sm">
          {/* About Section */}
          <div className="p-6 flex justify-center">
            <div className='bg-white/90 rounded-lg shadow-md p-6 max-w-3xl w-full '>
            <About />
          </div></div>

          {/* Player Cards Slider Section */}
          <div className="p-6  bg-[#f0f4f8]">
            <section className="w-full mt-5">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">Star Players from Top Football Clubs</h2>

              {/* Scrolling row of cards */}
              <div className="overflow-hidden whitespace-nowrap">
                <div className="flex animate-scroll-left w-max">
                  {[...players, ...players].map((player, index) => (
                    <div
                      key={`row1-${index}`}
                      className="bg-white rounded-xl shadow-lg p-4 m-2 flex items-center gap-4 min-w-[280px] transition-transform duration-300 hover:scale-105"
                    >
                      <img src={player.logo} alt={`${player.club} logo`} className="w-12 h-12 object-contain" />
                      <div>
                        <h2 className="text-lg font-semibold text-gray-800">{player.name}</h2>
                        <p className="text-sm text-gray-500">{player.position}</p>
                        <p className="text-xs text-gray-400">{player.club}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </main>

        {/* Footer remains unchanged */}
        <footer className="bg-[#19325F] text-white p-6 text-sm">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <p className="font-semibold mb-2">Tools</p>
              <ul className="space-y-1">
                <li>Player Analyser</li>
                <li>Match Records</li>
                <li>Communication</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold mb-2">Apps</p>
              <ul className="space-y-1">
                <li>Play Store</li>
                <li>App Store</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold mb-2">Resources</p>
              <ul className="space-y-1">
                <li>Documentation</li>
                <li>Free Demo</li>
                <li>Press Conference</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold mb-2">Legal</p>
              <ul className="space-y-1">
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
                <li>Cookies</li>
              </ul>
            </div>
          </div>
          <hr className="my-4 border-gray-400" />
          <div className="flex justify-between items-center flex-wrap gap-4">
            <p>©2025 griet.aac.in • All rights reserved</p>
            <div className="flex gap-4 text-lg">
              <i className="fab fa-facebook hover:text-blue-400"></i>
              <i className="fab fa-twitter hover:text-sky-400"></i>
              <i className="fab fa-instagram hover:text-pink-400"></i>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
