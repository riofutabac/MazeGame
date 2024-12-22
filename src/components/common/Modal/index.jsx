import React from 'react'
import './styles.css'

export default function Modal({ isOpen, children }) {
  if (!isOpen) return null

  return (
    <div className="common-modal-backdrop">
      <div className="common-modal-content">
        {children}
      </div>
    </div>
  )
}