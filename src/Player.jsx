import React from 'react';
import Sidebar from './Sidebar';
import Bottompannel from './Bottompannel';

const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const todayIndex = new Date().getDay() - 1; // Sunday = 0, Mon = 1

const Player = () => {
  return (
    <div className="flex min-h-screen bg-gradient-to-r from-[#e0f7fa] to-[#e0f2ff] font-sans">
      <Sidebar />

      <main className="flex-1 p-6">
        <div className="max-w-7xl mx-auto">

          {/* === Top Row === */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            
            {/* Profile Card */}
            <div className="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center">
              <img
                src="https://res.cloudinary.com/dhuado5jg/image/upload/v1752591513/download_i3r7tj.jpg"
                alt="Player"
                className="rounded-xl w-[180px] h-auto mb-4 shadow-md"
              />
              <h2 className="text-2xl font-bold text-[#19325F]">Welcome, Halland</h2>
              <p className="text-sm text-gray-600 mt-2">Manchester City FC</p>
            </div>

            {/* Schedule Section */}
            <div className="bg-white rounded-2xl shadow-xl p-6 col-span-1">
              <h3 className="text-xl font-semibold text-[#19325F] mb-4">📌 Weekly Schedule</h3>
              <table className="w-full text-sm text-left text-gray-700">
                <thead className="text-xs uppercase text-gray-600 border-b">
                  <tr>
                    <th className="pb-2">Date</th>
                    <th className="pb-2">Activity</th>
                    <th className="pb-2">Time</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2">July 20</td>
                    <td>Training</td>
                    <td>10:00 AM</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">July 22</td>
                    <td>Match vs Chelsea</td>
                    <td>4:00 PM</td>
                  </tr>
                  <tr>
                    <td className="py-2">July 25</td>
                    <td>Medical Checkup</td>
                    <td>9:00 AM</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Weekly Calendar */}
            <div className="bg-white rounded-2xl shadow-xl p-6 col-span-1 flex flex-col items-center justify-center">
              <h3 className="text-xl font-semibold text-[#19325F] mb-4">🗓️ This Week</h3>
              <div className="grid grid-cols-7 gap-2 w-full text-center">
                {weekDays.map((day, idx) => (
                  <div
                    key={day}
                    className={`p-3 rounded-lg font-semibold ${
                      idx === todayIndex
                        ? 'bg-blue-500 text-white shadow'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {day}
                  </div>
                ))}
              </div>
              <p className="text-xs mt-4 text-gray-500 italic">
                Today is <strong>{weekDays[todayIndex] || 'Sun'}</strong>
              </p>
            </div>
          </div>

          {/* === Second Row === */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            
            {/* Upcoming Events */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-xl font-semibold text-[#19325F] mb-4">📅 Upcoming Events</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="border-l-4 border-blue-400 pl-3">
                  <span className="font-semibold">July 20</span> – Training @ 10 AM
                </li>
                <li className="border-l-4 border-green-400 pl-3">
                  <span className="font-semibold">July 22</span> – Match vs Chelsea
                </li>
                <li className="border-l-4 border-red-400 pl-3">
                  <span className="font-semibold">July 25</span> – Medical Checkup
                </li>
              </ul>
            </div>

            {/* Leaderboard (Moved down) */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-xl font-semibold text-[#19325F] mb-4">🏆 Leaderboard</h3>
              <ul className="space-y-2 text-gray-700 text-base">
                <li className="border-b pb-1">1. Halland – <span className="font-bold">15 Goals</span></li>
                <li className="border-b pb-1">2. KDB – <span className="font-bold">12 Assists</span></li>
                <li>3. Foden – <span className="font-bold">10 Goals</span></li>
              </ul>
            </div>
          </div>

          {/* === Upload Cards === */}
          <div className="flex flex-wrap justify-center gap-8">
            <div className="bg-gradient-to-br from-[#d0e9ff] to-[#e0f2ff] px-6 py-5 rounded-2xl text-center shadow-lg w-56 hover:scale-105 transition-transform">
              <div className="text-5xl mb-3">📝</div>
              <h3 className="text-lg font-semibold text-[#19325F]">Upload Contract</h3>
              <p className="text-sm text-gray-600">Player Agreement</p>
            </div>

            <div className="bg-gradient-to-br from-[#d0e9ff] to-[#e0f2ff] px-6 py-5 rounded-2xl text-center shadow-lg w-56 hover:scale-105 transition-transform">
              <div className="text-5xl mb-3">➕</div>
              <h3 className="text-lg font-semibold text-[#19325F]">Upload Records</h3>
              <p className="text-sm text-gray-600">Medical History</p>
            </div>
          </div>

          {/* Bottom Panel */}
          <div className="mt-8">
            <Bottompannel />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Player;
