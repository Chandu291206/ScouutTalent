import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import ImageCarousel from './Carousel'

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true)
  const location = useLocation()

  useEffect(() => {
    if (location.pathname === '/signup') {
      setIsLogin(false)
    } else if (location.pathname === '/login') {
      setIsLogin(true)
    }
  }, [location.pathname])

  return (
    <div
      className="bg-[url('https://res.cloudinary.com/dhuado5jg/image/upload/v1752855957/qdLo3nNq86HylBNDLeaAZr4foECCy3v82UAezivc23U_zsr1lv.webp')] 
                 bg-cover bg-center min-h-screen flex flex-col"
    >
      {/* Header */}
      <header className="bg-[#19325F] text-white fixed top-0 left-0 w-full py-5 z-30 shadow">
        <Link to="/">
          <div className="ml-4 flex items-center gap-2">
            <img src="https://res.cloudinary.com/dhuado5jg/image/upload/v1753204336/WhatsApp_Image_2025-07-22_at_22.41.44_f1d2277a-removebg-preview_crjayb.png" alt="logo" className="h-12" />
            <p className="text-white font-semibold text-lg">ScoutTalent</p>
          </div>
        </Link>
      </header>

      {/* Container */}
      <div className="flex max-w-6xl w-full mx-auto mt-[100px] shadow-xl rounded-xl overflow-hidden">
        {/* Left Carousel */}
        <div className="w-1/2 hidden md:block">
          <ImageCarousel />
        </div>

        {/* Right Form Section with blurred background */}
        <div className="w-full md:w-1/2 flex items-center justify-center py-10 relative backdrop-blur-md bg-white/10">
          <div className="relative w-[320px] h-[400px]">
            <div className="bg-white relative w-full h-full rounded-lg overflow-hidden shadow">

              {/* Login Form */}
              <div
                className={`absolute inset-0 pt-10 pb-8 transition-all duration-500 ease-in-out ${
                  isLogin ? 'translate-y-0 opacity-100 z-20' : '-translate-y-full opacity-0 z-10'
                }`}
              >
                <h2 className="text-[#19325F] text-center text-2xl font-semibold mb-6">Login</h2>

                <form className="space-y-4 px-6">
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-2 border border-gray-300 bg-gray-100 text-black rounded-md placeholder-black focus:outline-none focus:ring-2 focus:ring-[#19325F]"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full px-4 py-2 border border-gray-300 bg-gray-100 text-black rounded-md placeholder-black focus:outline-none focus:ring-2 focus:ring-[#19325F]"
                  />
                  <Link to="/signup">
                  <button
                    type="submit"
                    className="w-full bg-[#253B45] text-white font-semibold py-2 rounded-md hover:bg-[#1b2e38] transition"
                  >
                    Login
                  </button></Link>
                </form>

                <div
                  className="bg-[#335C85] rounded-t-full mt-26.5 py-2 text-white text-center cursor-pointer hover:bg-[#2b4f72] transition"
                  onClick={() => setIsLogin(false)}
                >
                  <h2 className="text-lg font-semibold">Signup</h2>
                </div>
              </div>

              {/* Signup Form */}
              <div
                className={`absolute inset-0 pt-6 pb-8 bg-[#335C85] transition-all duration-500 ease-in-out ${
                  isLogin ? 'translate-y-full opacity-0 z-10' : 'translate-y-0 opacity-100 z-20'
                }`}
              >
                <div className="relative h-10 -mt-6 z-10">
                  <div
                    className="absolute top-0 left-0 w-full h-full bg-white rounded-b-full text-center cursor-pointer"
                    onClick={() => setIsLogin(true)}
                  >
                    <h2 className="text-[#335C85] text-xl font-semibold pt-1">Login</h2>
                  </div>
                </div>

                <h2 className="text-white text-2xl font-semibold text-center mb-4 mt-4">Sign Up</h2>

                <form className="space-y-3 px-6">
                  <input
                    type="text"
                    placeholder="Username"
                    className="w-full px-4 py-2 text-black rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-[#19325F]"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-2 text-black rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-[#19325F]"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-2 text-black rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-[#19325F]"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full px-4 py-2 text-black rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-[#19325F]"
                  />
                  <Link to="/signup">
                    <button
                      type="submit"
                      className="w-full bg-[#253B45] text-white font-bold text-center py-2 rounded-md hover:bg-[#1b2e38] transition"
                    >
                      Sign Up
                    </button>
                  </Link>
                </form>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthForm
