import React from 'react';
import Sidebar from './Sidebar';
import UploadCard from './UploadCard';
import Bottompannel from './Bottompannel';

const Player = () => {
  return (
    <div className="flex min-h-screen bg-green-50 font-sans">
      <Sidebar />
      <main className="flex-1 p-4">
        {/* Profile Welcome Card */}
        <div className="bg-teal-100 p-2 rounded-lg flex items-center gap-4 shadow-md">
          <img
            src="https://res.cloudinary.com/dhuado5jg/image/upload/v1752591513/download_i3r7tj.jpg"
            alt="profile"
            className="w-100 h-110 object-cover rounded-lg"
          />
          <h1 className="text-2xl font-semibold">Welcome, Halland</h1>
        </div>

        {/* Upload Cards Section */}
        <div className="mt-5 flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="bg-blue-200 px-6 py-4 rounded-xl text-center shadow-md w-52">
            <div className="text-4xl mb-2">📝</div>
            <h3 className="text-lg font-semibold">Upload</h3>
            <p className="text-sm text-gray-700">Contract Info</p>
          </div>

          <div className="bg-blue-200 px-6 py-4 rounded-xl text-center shadow-md w-52">
            <div className="text-4xl mb-2">➕</div>
            <h3 className="text-lg font-semibold">Upload</h3>
            <p className="text-sm text-gray-700">Medical History</p>
          </div>
        </div>

        {/* Bottom Panel */}
        <Bottompannel />
      </main>
    </div>
  );
};

export default Player;
