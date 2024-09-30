'use client'

import React from 'react'

export default function ButtonExternal({ href, buttonText }) {
  const handleClick = (e) => {
    e.preventDefault()
    window.open(href, '_blank', 'noopener,noreferrer')
  }

  return (
    <button 
      className="btn btn-primary"
      onClick={handleClick}
    >
      {buttonText}
    </button>
  )
}