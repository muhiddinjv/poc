import React from 'react'
import WordHighlighter from './Highlighter'
import BackBtn from '../../components/BackBtn'

function Story() {
  return (
    <section className="min-h-screen bg-purple-500 flex flex-col items-center p-4">
      <div className="px-4 py-6 bg-white rounded-lg flex flex-col max-w-lg w-full">
        <div className='flex items-center'>
          <BackBtn textColor="text-purple-600" />
          <span className='text-3xl text-center text-purple-600'>Headless Horseman</span>
        </div>
        <WordHighlighter />
      </div>
    </section>
  )
}

export default Story