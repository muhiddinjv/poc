import React from 'react'
import { useNavigate } from 'react-router-dom';

function TopBar() {
    const navigate = useNavigate();

  return (
    <div className="space-x-1 bg-gray-200 py-2">
        <button onClick={() => navigate("/")} className="py-1 px-2 bg-gray-200 rounded font-bold">{'<'}</button>
        <button className="py-1 px-2 bg-gray-500 rounded text-white">Quiz</button>
        <button className="py-1 px-2 bg-gray-200 rounded">Gapfil</button>
        <button className="py-1 px-2 bg-gray-200 rounded">Number</button>
        <button className="py-1 px-2 bg-gray-200 rounded">Reorder</button>
        <button className="py-1 px-2 bg-gray-200 rounded">Retell</button>
    </div>
  )
}

export default TopBar