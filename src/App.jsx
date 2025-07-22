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
            <Link to="/About" className="hover:underline">About Us</Link>
            <Link to="/login" className="hover:underline">Login</Link>
          </div>
          <Link to="/">
            <div className="absolute left-6 top-4 flex items-center gap-2">
              <img src="https://res.cloudinary.com/dhuado5jg/image/upload/v1753204336/WhatsApp_Image_2025-07-22_at_22.41.44_f1d2277a-removebg-preview_crjayb.png" alt="ScoutTalent logo" className="h-12" />
              <p className="font-bold text-lg">ScoutTalent</p>
            </div>
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-center mt-6">Discover the Next Football Superstar</h1>
        </header>

        <main className="flex flex-col  bg-white/80 backdrop-blur-sm">
          {/* About Section */}
          <div className='flex flex-row mt-5'>
       <div className=' w-[50vh] ml-[5%] rounded-lg border border-gray-300 p-2.5 bg-sky-300 flex flex-col shadow-md '>
        <img src="C:\Users\varsh\OneDrive\Pictures\Screenshots\Screenshot 2025-07-04 165449.png" className='image1 w-25%' alt="" />
          <h1 className='pt-5 text-center font-bold font-[Buenard]'>Agent</h1>
          <p className='text-[20px] text-center text-[#323f4b] font-[Josefin_Sans]'>Manage transfer details of your Players</p>
          <p className='text2  ' id='text-left pl-[3%] text-[#7b8794] font-[Josefin_Sans]'  >Negotiate contracts with clubs, ensure contract conditions,handle bonuses
            provide career,planning,marketing and promotional apperances of your players...
          </p>
         <button className='w-44 h-10 font-bold mt-5 mx-auto text-white bg-blue-600 rounded-lg border-0' >set up as agent</button>
         <a href="#" className='block text-center my-5 no-underline'>Know more  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
</svg></a>
      </div>      
      <div className=' w-[50vh] ml-[5%] rounded-lg border border-gray-300 p-2.5 bg-sky-300 flex flex-col shadow-md '>
        <img src="C:\Users\varsh\OneDrive\Pictures\Screenshots\Screenshot 2025-07-04 165449.png" className='image1 w-25%' alt="" />
          <h1 className='pt-5 text-center font-bold font-[Buenard]'>Scout</h1>
          <p className='text-[20px] text-center text-[#323f4b] font-[Josefin_Sans]'>Find better players for your team </p>
          <p className='text2  ' id='text-left pl-[3%] text-[#7b8794] font-[Josefin_Sans]'  >Evaluate talented players for clubs,academics or national teams.Acess a player's technical skills,physical awareness
            ,and overall potential.Find young talents and recuit for specific roles...
          </p>
         <button className='w-44 h-10 font-bold mt-5 mx-auto text-white bg-blue-600 rounded-lg border-0' >set up as scout</button>
         <a href="#" className='block text-center my-5 no-underline '>Know more  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
</svg></a>
        </div>
      <div className='  w-[50vh] ml-[5%] rounded-lg border border-gray-300 p-2.5 bg-sky-300 flex flex-col shadow-md '>
        <img src="C:\Users\varsh\OneDrive\Pictures\Screenshots\Screenshot 2025-07-04 165449.png" className='image1 w-25%' alt="" />
          <h1 className='pt-5 text-center font-bold font-[Buenard] '>Player</h1>
          <p className='text-[20px] text-center text-[#323f4b] font-[Josefin_Sans]'>Find your chance and prove yourself</p>
          <p className='text2  ' id='text-left pl-[3%] text-[#7b8794] font-[Josefin_Sans]'  >Be the one to represent your club or country with the goal of winning games and championships .
            Also engage in media duties ,fan interactions,and community interactions ,while managing personal brand and proffesional image...
          </p>
          <button className='w-44 h-10 font-bold mt-5 mx-auto text-white bg-blue-600 rounded-lg border-0 ' >set up as player</button>
         <a href="#" className='block text-center my-5 no-underline '>Know more  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-right-short icon" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
</svg></a>
        </div>
      </div>

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