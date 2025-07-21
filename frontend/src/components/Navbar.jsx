import React, { useState } from 'react'

const Navbar = ({ onToggleSidebar }) => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', backgroundColor: '#333', color: '#fff' }}>
      <div>
        <button onClick={onToggleSidebar} style={{ marginRight: '10px' }}>
          ☰
        </button>
        <span>My Project</span>
      </div>
      <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
        <li style={{ margin: '0 10px', cursor: 'pointer' }}>Home</li>
        <li style={{ margin: '0 10px', cursor: 'pointer' }}>Orders</li>
        <li style={{ margin: '0 10px', cursor: 'pointer' }}>Settings</li>
      </ul>
      <div style={{ cursor: 'pointer' }}>
        <img
          src="https://via.placeholder.com/30"
          alt="Profile"
          style={{ borderRadius: '50%' }}
        />
      </div>
    </nav>
  )
}

export default Navbar