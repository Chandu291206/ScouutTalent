import React from 'react'

const UploadCard = ({ title, subtitle, icon }) => {
  return (
      <div className="bg-white w-52 h-44 rounded-xl shadow-md flex flex-col items-center justify-center gap-2 text-center">
      <div className="text-4xl">{icon}</div>
      <p className="text-lg font-medium">{title}</p>
      <p className="text-sm text-gray-600">{subtitle}</p>
    </div>
  )
}

export default UploadCard
