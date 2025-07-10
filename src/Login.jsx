import React from 'react'

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f2fbf1]">
      <div className="w-[320px] rounded-lg overflow-hidden shadow-lg">
        {/* Top Header */}
        <div className="bg-[#17325c] text-white text-center py-4 text-xl font-semibold">
          Sign up
        </div>

        {/* Curved White Card */}
        <div className="relative bg-white px-6 pt-12 pb-8">
          {/* Curved top */}
          <div className="absolute -top-10 left-0 w-full h-20 rounded-b-full"></div>

          <h2 className="text-green-700 text-center text-xl font-semibold mb-8 z-10 relative">Login</h2>

          {/* Form */}
          <form className="space-y-5 z-10 relative">
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
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2"
            >
              Login
            </button>
          </form>
        </div>
        </div>
        </div>
  )
}

export default Login
