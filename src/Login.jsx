import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import backgroundImg from '/public/Ball.png' // Adjust the path if needed

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <div className="bg-[#E0F2FF] min-h-screen flex flex-col">
      {/* Fixed Header */}
      <header className="bg-[#19325F] text-white fixed top-0 left-0 w-full py-5 z-30 shadow">
        <Link to="/">
          <div className='ml-4 flex flex-row items-center'>
            <img src="" alt="logo" className="w-6 h-6 mr-2" />
            <p className="text-white font-semibold text-lg">ScoutTalent</p>
          </div>
        </Link>
      </header>

      {/* Main Content Container */}
      <div className="flex max-w-6xl w-full mx-auto mt-[100px] shadow-xl rounded-xl overflow-hidden bg-white">
        {/* Left Image Section */}
        <div className="w-1/2 hidden md:block">
          <img
            src={backgroundImg}
            alt="Visual"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Form Section */}
        <div className="w-full md:w-1/2 flex items-center justify-center py-10 px-4 relative">
          <div className="relative w-[320px] h-[400px]">
            {/* Forms Container */}
            <div className="relative w-full h-full">
              
              {/* Login Form */}
              <div
                className={`absolute inset-0 pt-10 pb-8 transition-all duration-500 ease-in-out ${
                  isLogin ? 'translate-y-0 opacity-100 z-20' : '-translate-y-full opacity-0 z-10'
                }`}
              >
                <h2 className="text-green-700 text-center text-xl font-semibold mb-8">Login</h2>

                <form className="space-y-5 px-6">
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-2 border border-gray-300 bg-gray-300 text-black rounded-md placeholder-black"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full px-4 py-2 border border-gray-300 bg-gray-300 text-black rounded-md placeholder-black"
                  />
                  <button
                    type="submit"
                    className="w-full bg-[#253B45] text-white font-semibold py-2 rounded-md hover:bg-[#1b2e38]"
                  >
                    Login
                  </button>
                </form>

                <div className="bg-[#335C85] rounded-t-full mt-6 py-2 text-white text-center cursor-pointer " onClick={() => setIsLogin(false)}>
                  <h2 className="text-xl font-semibold">Signup</h2>
                </div>
              </div>

              {/* Sign Up Form */}
              <div
                className={`absolute inset-0 pt-6 pb-8 bg-[#335C85] transition-all duration-500 ease-in-out ${
                  isLogin ? 'translate-y-full opacity-0 z-10' : 'translate-y-0 opacity-100 z-20'
                }`}
              >
                <div className="relative h-10 -mt-6 z-10">
                  <div className="absolute top-0 left-0 w-full h-full bg-white rounded-b-full text-center">
                    <h2 onClick={() => setIsLogin(true)} className="text-[#335C85] text-2xl font-semibold cursor-pointer ">
                      Login
                    </h2>
                  </div>
                </div>

                <h2 className="text-white text-2xl font-semibold text-center mb-5">Sign Up</h2>

                <form className="space-y-2.5 px-6">
                  <input type="text" placeholder="Username" className="w-full px-4 py-2 text-black rounded-md bg-white" />
                  <input type="email" placeholder="Email" className="w-full px-4 py-2 text-black rounded-md bg-white" />
                  <input type="tel" placeholder="Phone Number" className="w-full px-4 py-2 text-black rounded-md bg-white" />
                  <input type="password" placeholder="Password" className="w-full px-4 py-2 mb-3 text-black rounded-md bg-white" />
                </form>

                <Link to="/signup">
                  <button type="submit" className="w-[85%] ml-6 bg-[#253B45] text-white font-bold text-center py-2 rounded-md hover:bg-[#1b2e38]">
                    Sign Up
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthForm
