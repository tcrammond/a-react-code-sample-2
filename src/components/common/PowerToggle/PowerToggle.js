import React, { Component } from 'react'

/**
 * Displays whether this server/entity is currently powered on or off, and allows
 * the user to toggle this via button click.
 */
export default function PowerToggle ({ on, onClick = () => {} }) {
  const isOn = !!on
  const classNames = isOn ? 'PowerToggle--on' : 'PowerToggle--off'
  
  return (
    <div className={`PowerToggle ${classNames}`}>
      <span className='PowerToggle__status'>{isOn ? 'On' : 'Off'} | </span>
      <button className='button is-small PowerToggle__toggle' onClick={onClick}>
        {isOn ? 'Power off' : 'Power on'}
      </button>
    </div>
  )
}