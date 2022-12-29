import React from 'react';

function Header() {
  return (
    <div style={{ backgroundColor: 'purple', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h1 style={{ marginLeft: '10px' }}>findmyGC</h1>
      <input type="text" placeholder="Search for a group chat" />
      <button style={{ marginRight: '10px' }}>Add new group chat</button >
    </div>
  );
}

export default Header;