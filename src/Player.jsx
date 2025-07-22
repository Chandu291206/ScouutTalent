import React from 'react';
import Sidebar from './Sidebar';
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer
} from 'recharts';
import { FaCalendarAlt, FaUserCircle, FaChartLine, FaMedal } from 'react-icons/fa';

const data = [
  { stat: 'Goals', value: 11 },
  { stat: 'Assists', value: 11 },
  { stat: 'Tackles', value: 3 },
  { stat: 'Touches', value: 66 },
  { stat: 'Points', value: 67 },
];

const Player = () => {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-[#e3f2fd] to-[#f3e5f5] font-sans text-[#19325F]">
      <Sidebar />

      <main className="flex-1 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

            {/* LEFT SIDE */}
            <div className="md:col-span-7 flex flex-col gap-6">
              {/* Upcoming Events */}
              <div className="bg-white hover:shadow-2xl rounded-2xl transition-all duration-300 p-6 border-t-4 border-blue-400">
                <div className="flex items-center gap-2 mb-4">
                  <FaCalendarAlt className="text-blue-400" />
                  <h3 className="text-xl font-bold">Upcoming Events</h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="pl-3 border-l-4 border-blue-300">
                    <span className="font-semibold">July 20</span> – Training @ 10 AM
                  </li>
                  <li className="pl-3 border-l-4 border-green-300">
                    <span className="font-semibold">July 22</span> – Match vs Chelsea
                  </li>
                  <li className="pl-3 border-l-4 border-red-300">
                    <span className="font-semibold">July 25</span> – Medical Checkup
                  </li>
                </ul>
              </div>

              {/* Weekly Schedule */}
              <div className="bg-white hover:shadow-2xl rounded-2xl transition-all duration-300 p-6 border-t-4 border-purple-400">
                <div className="flex items-center gap-2 mb-4">
                  <FaChartLine className="text-purple-400" />
                  <h3 className="text-xl font-bold">Weekly Schedule</h3>
                </div>
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

              {/* Leaderboard */}
              <div className="bg-white hover:shadow-2xl rounded-2xl transition-all duration-300 p-6 border-t-4 border-yellow-400">
                <div className="flex items-center gap-2 mb-4">
                  <FaMedal className="text-yellow-500" />
                  <h3 className="text-xl font-bold">Leaderboard</h3>
                </div>
                <ul className="space-y-2 text-gray-800 text-base">
                  <li className="border-b pb-1">🥇 Halland – <span className="font-bold">15 Goals</span></li>
                  <li className="border-b pb-1">🥈 KDB – <span className="font-bold">12 Assists</span></li>
                  <li>🥉 Foden – <span className="font-bold">10 Goals</span></li>
                </ul>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="md:col-span-5 flex flex-col gap-6">

              {/* Profile Card */}
              <div className="bg-white hover:shadow-2xl transition-all duration-300 rounded-2xl p-4 flex flex-col items-center">
                <img
                  src="https://res.cloudinary.com/dhuado5jg/image/upload/v1752591513/download_i3r7tj.jpg"
                  alt="Player"
                  className="rounded-xl w-[160px] h-auto mb-2 shadow-md"
                />
                <div className="flex items-center gap-2 mt-1">
                  <FaUserCircle className="text-[#19325F] text-xl" />
                  <h2 className="text-lg font-bold">Halland</h2>
                </div>
                <p className="text-sm text-gray-600">Manchester City FC</p>
              </div>

              {/* Radar Chart */}
              <div className="bg-white hover:shadow-2xl transition-all duration-300 rounded-2xl p-4">
                <h3 className="text-center text-base font-semibold mb-2 text-[#19325F]">Performance</h3>
                <ResponsiveContainer width="100%" height={260}>
                  <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="stat" />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} />
                    <Radar name="Stats" dataKey="value" stroke="#4a90e2" fill="#4a90e2" fillOpacity={0.4} />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
};

export default Player;