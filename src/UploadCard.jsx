import React from 'react'

const UploadCard = ({ url, title, age, subtitle, team }) => {
  return (
      <div className="bg-blue-100 rounded-xl p-6 shadow-lg w-[250px] text-center">
            <img
              src={url}
              alt="Player"
              className="rounded-md h-40 w-full object-cover mb-4"
            />
            <div className="text-lg font-bold">{title}</div>
            <div className="flex justify-between mt-1 text-sm font-semibold">
              <span>{age}</span>
              <span>{subtitle}</span>
            </div>
            <hr className="my-2" />
            <div className="text-sm">{team}</div>
          </div>
  )
}

export default UploadCard
