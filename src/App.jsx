import { useState } from 'react'
import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import {Link} from 'react-router-dom'

const players = [
  {
    name: "BELLINGHAM",
    age: 21,
    position: "Midfielder",
    club: "Real Madrid",
    img: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Jude_Bellingham_2023.jpg"
  },
  {
    name: "RONALDO",
    age: 40,
    position: "Striker",
    club: "Al Nasser",
    img: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg"
  },
  {
    name: "Lionel Messi",
    age: 37,
    position: "Rightwing",
    club: "Inter Miami",
    img: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Lionel_Messi_Argentina_celebrating_World_Cup.jpg"
  }
];
function App() {
  

  return (
  <>
      <div className="min-h-screen bg-[#F3FAF0]">
            <header className="bg-[#19325F] text-white p-6 flex flex-col items-center relative">
              <div className="absolute right-4 top-4 flex flex-row ">
                <Link to="/login"><p className="mr-10">login</p></Link>
                <Link to="/register"><p>Signup</p></Link>
              </div>
              <h1 className="text-3xl font-bold text-center">Discover the Next Football Superstar</h1>
              <input
                type="text"
                placeholder="Search Players"
                className="mt-4 w-full max-w-md px-4 py-2 rounded-full text-black"
              />
              
            </header>
      
            <section className="p-6">
              <h2 className="text-xl font-bold mb-4">Featured Players</h2>
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/Lionel_Messi_Argentina_celebrating_World_Cup.jpg" alt="External" />

              </section>
      
            <footer className="p-6 bg-[#F3FAF0] text-sm text-gray-700 flex justify-between items-center flex-wrap">
              <p>©2025 griet.aac.in • All rights reserved</p>
              <div className="flex gap-8">
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
                <div className="flex items-center gap-4">
                  <i className="fab fa-facebook"></i>
                  <i className="fab fa-twitter"></i>
                  <i className="fab fa-instagram"></i>
                </div>
              </div>
            </footer>
          </div>

  </>
  );
}

export default App
