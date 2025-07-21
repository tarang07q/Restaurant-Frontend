import React from 'react'

const Sidebar = ({ isOpen }) => {
  return (
    <aside
      style={{
        width: isOpen ? '200px' : '0',
        height: '100vh',
        backgroundColor: '#222',
        color: '#fff',
        overflowX: 'hidden',
        transition: 'width 0.3s ease',
        position: 'fixed',
        top: 0,
        left: 0,
        paddingTop: '60px',
      }}
    >
      {isOpen && (
        <ul style={{ listStyle: 'none', padding: '0 20px' }}>
          <li style={{ padding: '10px 0', cursor: 'pointer' }}>Dashboard</li>
          <li style={{ padding: '10px 0', cursor: 'pointer' }}>Menu</li>
          <li style={{ padding: '10px 0', cursor: 'pointer' }}>Reservations</li>
          <li style={{ padding: '10px 0', cursor: 'pointer' }}>Customers</li>
        </ul>
      )}
    </aside>
  )
}

export default Sidebar