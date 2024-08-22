import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function BackBtn({textColor}) {
  return (
    <Link to="/" className="px-1 w-fit">
        <FontAwesomeIcon icon={faArrowLeft} className={`p-1 ${textColor}`} size="xl" />
    </Link>
  )
}

export default BackBtn