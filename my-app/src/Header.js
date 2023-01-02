import React from 'react';
import SearchBar from './SearchBar';
function Header() {
  return (
    <div style={{ backgroundColor: 'purple', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h1 style={{ marginLeft: '10px' }}>findmyGC</h1>
      <SearchBar/>
      <button style={{ marginRight: '10px' }}>Add new group chat</button >
    </div>
  );
}

export default Header;