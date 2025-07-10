import React from 'react'
import {Link} from 'react-router-dom'

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f2fbf1]">
      <div className="w-[320px] bg-[#1b3556] rounded-2xl px-6 py-8 shadow-lg">
        <h2 className="text-white text-2xl font-semibold text-center mb-6">Sign up</h2>

        <form className="space-y-4">
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
            className="w-full px-4 py-2 text-black rounded-sm bg-white"
          />
            <Link to="/signup">
            <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2"
          >
            Sign up
          </button>
            </Link>
        </form>

        {/* Switch to Login (optional button) */}
        <div className="bg-white mt-6 py-3 rounded-t-full text-center text-[#1b3556] font-semibold">
          Login
        </div>
      </div>
    </div>
  )
}

export default Register
