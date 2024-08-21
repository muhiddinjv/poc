import React from 'react'
import { Link } from 'react-router-dom'
import WordHighlighter from '../story/Highlighter'

function Story() {
  return (
    <section className="bg-purple-500 min-h-screen flex flex-col justify-center items-center">
      <span className='text-3xl text-white'>Under development</span>
      <Link to="/" className="inline-flex text-gray-800 bg-white hover:bg-gray-200 rounded-lg px-5 py-2.5 text-center my-4">Back to Homepage</Link>
      <WordHighlighter />
    </section>
  )
}

export default Story