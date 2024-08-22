import React from 'react'
import { Link } from 'react-router-dom'
import WordHighlighter from '../story/Highlighter'
import SrtToJson from '../utils/SrtToJson'

function Story() {
  return (
    <section className="min-h-screen bg-purple-500 flex flex-col items-center p-4">
      <div className="px-4 py-2 bg-purple-500 text-white flex flex-col max-w-lg w-full">
        <span className='text-3xl text-white'>Under development</span>
        <Link to="/" className="inline-flex text-gray-800 bg-white hover:bg-gray-200 rounded-lg px-5 py-2.5 text-center my-4">Back to Homepage</Link>
        <WordHighlighter />
        {/* <SrtToJson /> */}
      </div>
    </section>
  )
}

export default Story