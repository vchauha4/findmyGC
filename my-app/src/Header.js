import React from 'react';
import SearchBar from './SearchBar';
import IconLabelButtons from './AddMGroupButton';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <div style={{ backgroundColor: 'purple', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h1 style={{ marginLeft: '10px', cursor:'pointer' }}><Link to="/">findmyGC</Link></h1>
      <SearchBar/>
      <IconLabelButtons><Link to="/addForm"></Link></IconLabelButtons>
    </div>
  );
}

export default Header;