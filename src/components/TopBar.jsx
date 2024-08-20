import React from 'react'
import { Link } from 'react-router-dom';

function TopBar() {

  return (
    <div className="space-x-1 bg-gray-200 py-2">
        <Link to="/" className="py-1 px-2 bg-gray-200 rounded font-bold">{'<'}</Link>
        <button onClick={() => alert('coming soon')} className="py-1 px-2 bg-gray-500 rounded text-white">Quiz</button>
        <button onClick={() => alert('Gapfill is coming soon')} className="py-1 px-2 bg-gray-200 rounded">Gapfil</button>
        <button onClick={() => alert('Number is coming soon')} className="py-1 px-2 bg-gray-200 rounded">Number</button>
        <button onClick={() => alert('Reorder is coming soon')} className="py-1 px-2 bg-gray-200 rounded">Reorder</button>
        <button onClick={() => alert('Retell is coming soon')} className="py-1 px-2 bg-gray-200 rounded">Retell</button>
    </div>
  )
}

export default TopBar