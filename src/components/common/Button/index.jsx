import React from 'react'
import './styles.css'

export default function Button({ children, onClick }) {
  return (
    <button className="common-button" onClick={onClick}>
      {children}
    </button>
  )
}