import React from 'react'
import Sidebar from './Sidebar'
import UploadCard from './UploadCard'
import Bottompannel from './Bottompannel'

const Player = () => {
  return (
    <div className="flex min-h-screen bg-green-50">
      <Sidebar />
      <main className="flex-1 p-6">
        <div className="bg-teal-100 p-4 rounded-lg flex items-center gap-4 shadow-md">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Erling_Haaland_2023.jpg/440px-Erling_Haaland_2023.jpg"
            alt="profile"
            className="w-24 h-24 object-cover rounded-lg"
          />
          <h1 className="text-2xl font-semibold">Welcome, Halland</h1>
        </div>

        <div className="mt-8 flex gap-6">
          <UploadCard
            title="Upload"
            subtitle="Contract Info"
            icon="📝"
          />
          <UploadCard
            title="Upload"
            subtitle="Medical History"
            icon="➕"
          />
        </div>

        <Bottompannel />
      </main>
    </div>
  )
}

export default Player
