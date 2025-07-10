import React from 'react'
import {Link} from 'react-router-dom'

const Signup = () => {
  return (
    <>
    <div className="min-h-screen bg-green-50 font-sans">
      {/* Top Navbar */}
      <div className="bg-[#13294B] p-4 flex items-center justify-start">
        <img src="/logo.png" alt="Logo" className="w-10 h-10" />
      </div>

      {/* Headings */}
      <div className="text-center mt-12 px-4">
        <h1 className="text-3xl font-semibold mb-2">
          Your chance to build ultimate team
        </h1>
        <h2 className="text-xl text-gray-700">
          Opportunity for every player
        </h2>
      </div>

      {/* Role Cards */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-10 px-6">
        {/* Agent */}
        <Link to="/Playerlist">
        <div className="bg-blue-200 px-6 py-4 rounded-xl text-center shadow-md w-52">
          <h3 className="text-lg font-semibold mb-2">Agent</h3>
          <p className="text-sm text-gray-700">Manage transfer details of your players</p>
        </div>
        </Link>
        
        {/* Scout */}
        <Link to="/Scoutmar">
        <div className="bg-blue-200 px-6 py-4 rounded-xl text-center shadow-md w-52">
          <h3 className="text-lg font-semibold mb-2">Scout</h3>
          <p className="text-sm text-gray-700">Find better players for your team</p>
        </div>
        </Link>
        

        {/* Player */}
        <Link to="/Player">
        <div className="bg-blue-200 px-6 py-4 rounded-xl text-center shadow-md w-52">
          <h3 className="text-lg font-semibold mb-2">Player</h3>
          <p className="text-sm text-gray-700">Find your chance and prove yourself</p>
        </div>
        </Link>
        
      </div>

      {/* Footer Statement */}
      <div className="text-center mt-16 px-4">
        <h1 className="text-3xl font-bold leading-tight">
          WE BELIEVE IN SPORTS <br />
          AND TEAMS BELIEVE IN US
        </h1>
      </div>
    </div>

    </>
  )
}

export default Signup
