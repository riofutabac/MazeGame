import React from 'react'
import './styles.css'

export default function Question({ questionText }) {
  return (
    <div className="question">
      <p>{questionText}</p>
    </div>
  )
}