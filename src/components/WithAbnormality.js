import React from 'react'

const WithAbnormality = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen animate-bounce">
        <div className='text-7xl font-bold'>Abnormality Detected! Repeat!</div>
        <div className='text-8xl text-red-500 font-extrabold mt-15 duration-1000'>Don't cheat next time!</div>
    </div>
  )
}

export default WithAbnormality