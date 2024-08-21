import React from 'react'
import { Link } from 'react-router-dom'

function Story() {
  return (
    <section className="bg-purple-500 min-h-screen flex flex-col justify-center items-center">
      <span className='text-3xl text-white'>Under construction</span>
      <Link to="/" className="inline-flex text-gray-800 bg-white hover:bg-gray-200 rounded-lg px-5 py-2.5 text-center my-4">Back to Homepage</Link>
    </section>
  )
}

export default Story