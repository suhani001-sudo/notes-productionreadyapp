import React from 'react'

function Loader() {
  return (
      <div className="loader-container">
      {[1, 2, 3].map((item) => (
        <div key={item} className="skeleton-card">
          <div className="skeleton-line short"></div>
          <div className="skeleton-line"></div>
        </div>
      ))}
    </div>
  )
}

export default Loader