import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(false)

  return (
    <div className="min-h-screen flex items-center justify-center bg-[url(/IMG-20250711-WA0004.jpg)] bg-no-repeat bg-cover bg-center">
      <header className="bg-[#19325F] text-white  items-center ">
              <Link to="/">
              <div className='absolute left-4 top-4 flex flex-row'>
              <img src="" alt="logo" />
              <p>ScoutTalent</p>
              </div></Link>
            </header>
      <div className="relative w-[320px] h-[380px]  rounded-lg overflow-hidden shadow-lg bg-white">
        
        {/* Forms Container */}
        <div className="relative w-full h-full">
          {/* Login Form */}
          <div
            className={`absolute inset-0 px-6 pt-12 pb-8 transition-all duration-500 ease-in-out ${
              isLogin
                ? 'translate-y-0 opacity-100 z-20'
                : '-translate-y-full opacity-0 z-10'
            }`}>

              <h2 className="text-green-700 text-center text-xl font-semibold mb-8  ">
                Login</h2>

            <form className="space-y-5">
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 border border-gray-300 bg-gray-300 text-black rounded-sm placeholder-black"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 border border-gray-300 bg-gray-300 text-black rounded-sm placeholder-black"
              />
              <button
                type="submit"
                className="w-full bg-[#253B45] text-white font-semibold py-2"
              >
                Login
              </button>
            </form>
            <br /><br />
            <div className='bg-[#335C85]  rounded-t-full mt-6 py-0  text-white'>
            <h2
              onClick={() => setIsLogin(false)}
              className="text-white-700 text-center text-xl font-semibold p-2 mb-8 cursor-pointer hover:shadow"
            >
              Signup
            </h2>
            </div>
          </div>

          {/* Sign Up Form */}
          <div
            className={`absolute inset-0 px-6 pt-6 pb-8 bg-[#335C85] transition-all duration-500 ease-in-out ${
              isLogin
                ? 'translate-y-full opacity-0 z-10'
                : 'translate-y-0 opacity-100 z-20'
            }`}
          >
            <div className='relative h-10 -mt-6 z-10'>
            <div className='absolute top-0 left-0 w-full h-full bg-white rounded-b-full'>
             <h2
              onClick={() => setIsLogin(true)}
              className="text-[#335C85] text-2xl font-semibold text-center mb-6 cursor-pointer hover:shadow"
            >
              Login
            </h2>
            </div></div><br />
            <h2 className="text-white text-2xl font-semibold text-center  mb-5">Sign Up</h2>
            <form className="space-y-2.5">
              <input
                type="text"
                placeholder="Username"
                className="w-full px-4 py-2 text-black rounded-sm bg-white"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 text-black rounded-sm bg-white"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-2 text-black rounded-sm bg-white"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 mb-3 text-black rounded-sm bg-white"
              />
            </form>
            <Link to="/signup">
            <button
                type="submit"
                className="w-full bg-[#253B45] text-white font-bold py-2"
              >
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthForm
