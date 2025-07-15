import { useState } from 'react'
import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import {Link} from 'react-router-dom'
import UploadCard from './UploadCard';
import Bounce from './Bounce'


function App() {
  

  return (
  <>
      <div className="min-h-screen bg-[url(/IMG-20250711-WA0008.jpg)] bg-no-repeat bg-cover bg-center">
            <header className="bg-[#19325F] text-white p-6 flex flex-col items-center relative">
              <div className="absolute right-4 top-4 flex flex-row ">
                <Link to="/login"><p className="mr-10">Login</p></Link>
                <Link to="/register"><p>Signup</p></Link>
              </div>
              <Link to="/">
              <div className='absolute left-4 top-4 flex flex-row'>
              <img src="" alt="logo" />
              <p>ScoutTalent</p>
              </div></Link>
              <h1 className="text-3xl font-bold text-center">Discover the Next Football Superstar</h1>
            </header>
      
            <section className="p-6">
               <h2 className="text-white text-xl font-bold mb-4 ">Featured Players</h2>
              <div className='flex items-center flex-row ustify-between  gap-10 ml-75'>
              <UploadCard url="https://res.cloudinary.com/dhuado5jg/image/upload/v1752604188/download_ej4vie.jpg"
                          title="Bellinghum" age="21" subtitle="Midfielder" team="Real Madrid"
              />
              <UploadCard url="https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg"
                          title="Ronaldo" age="40" subtitle="Striker" team="Al Nasser"
              />
              <UploadCard url="https://res.cloudinary.com/dhuado5jg/image/upload/v1752591401/download_wjlepz.jpg"
                          title="Lionel Messi" age="37" subtitle="Right Wing" team="Inter Miami"
              />
              </div>
              </section>
      
            <footer className="absolute inset-x-0 bottom-0 p-4 bg-[#F3FAF0] text-sm text-gray-700">
  <div className="flex flex-col gap-2">
    {/* TOP: Lists section */}
    <div className="flex flex-wrap justify-between gap-10">
      <div>
        <p className="font-semibold">Tools</p>
        <ul>
          <li>Player Analyser</li>
          <li>Match Records</li>
          <li>Communication</li>
        </ul>
      </div>
      <div>
        <p className="font-semibold">Apps</p>
        <ul>
          <li>Play Store</li>
          <li>App Store</li>
        </ul>
      </div>
      <div>
        <p className="font-semibold">Resources</p>
        <ul>
          <li>Documentation</li>
          <li>Free Demo</li>
          <li>Press Conference</li>
        </ul>
      </div>
      <div>
        <p className="font-semibold">Legal</p>
        <ul>
          <li>Terms of Service</li>
          <li>Privacy Policy</li>
          <li>Cookies</li>
        </ul>
      </div>
    </div>

    {/* BOTTOM: Copyright and social icons */}
    <hr />
    <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
      <p>©2025 griet.aac.in • All rights reserved</p>
      <div className="flex items-center gap-4">
        <i className="fab fa-facebook"></i>
        <i className="fab fa-twitter"></i>
        <i className="fab fa-instagram"></i>
      </div>
    </div>
  </div>
</footer>

          </div>

  </>
  );
}

export default App
