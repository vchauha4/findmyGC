import React from 'react';
import { Link } from 'react-router-dom';
function Header2() {
  return (
    <div style={{ backgroundColor: 'purple', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h1 style={{ marginLeft: '10px', cursor:'pointer' }}><Link to="/">findmyGC</Link></h1>

    </div>
  );
}

export default Header2;