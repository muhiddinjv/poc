import { faHammer } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Link } from 'react-router-dom';

function NoPage() {

  return (
    <section className="h-screen bg-purple-500 text-white">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-sm text-center">
                <FontAwesomeIcon icon={faHammer} className="text-7xl"/>
                <p className="my-4 text-3xl tracking-tight font-bold md:text-4xl">Under development</p>
                <p className="mb-4 text-lg font-light">Sorry, this page is not ready yet. You'll find lots to explore on the home page. </p>
                <Link to="/" className="inline-flex text-purple-600 font-bold bg-white hover:bg-gray-200 rounded-lg px-5 py-2.5 text-center my-4">Back to Homepage</Link>
            </div>   
        </div>
    </section>
  )
}

export default NoPage