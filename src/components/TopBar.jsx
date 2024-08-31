import React from 'react'
import BackBtn from './BackBtn';

function TopBar({restartTour}) {
  return (
    <div className="flex justify-center items-center border-b space-x-1 py-4">
      <BackBtn textColor="text-purple-600" />
      <button className="py-1 px-2 bg-blue-500 rounded-lg text-white font-bold hover:bg-blue-600">Quiz</button>
      <button className="py-1 px-2 bg-green-500 rounded-lg text-white font-bold hover:bg-green-600">Gapfil</button>
      <button className="py-1 px-2 bg-yellow-500 rounded-lg text-white font-bold hover:bg-yellow-600">Number</button>
      <button className="py-1 px-2 bg-pink-500 rounded-lg text-white font-bold hover:bg-pink-600">Reorder</button>
      <button onClick={restartTour} className="py-1 px-3 bg-purple-500 rounded-full text-white font-bold hover:bg-purple-600">?</button>
    </div>
  )
}

export default TopBar