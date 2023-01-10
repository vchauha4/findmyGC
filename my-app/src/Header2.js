import React from 'react';
import { Link } from 'react-router-dom';
function Header2() {
  return (
    <div style={{ backgroundColor: "rgb(81, 38, 130)", color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h1 style={{ marginLeft: '2.5%', cursor:'pointer' }}><Link to="/" style={{ textDecoration: 'none', color:'white' }}>findmyGC</Link></h1>

    </div>
  );
}

export default Header2;