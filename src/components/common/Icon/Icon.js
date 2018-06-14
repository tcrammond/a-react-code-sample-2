import React from 'react';

/**
 * Renders an fontaesome icon in Bulma library layout.
 */
export default function Icon ({ icon = '' }) {
  return (
    <span className="icon">
      <i className={icon}></i>
    </span>
  )
}