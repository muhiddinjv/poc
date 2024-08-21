import React from 'react'
import { Link } from 'react-router-dom';

function NoPage() {

  return (
    <section className="h-screen bg-purple-500">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-sm text-center">
                <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-white dark:text-primary-500">404</h1>
                <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">Something's missing.</p>
                <p className="mb-4 text-lg font-light text-white">Sorry, we can't find that page. You'll find lots to explore on the home page. </p>
                <Link to="/" className="inline-flex text-gray-800 bg-white hover:bg-gray-200 rounded-lg px-5 py-2.5 text-center my-4">Back to Homepage</Link>
            </div>   
        </div>
    </section>
  )
}

export default NoPage