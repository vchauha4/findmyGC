import React from 'react';
import SearchBar from './SearchBar';
import IconLabelButtons from './AddMGroupButton';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <div style={{ backgroundColor: "rgb(81, 38, 130)", color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h1 style={{ marginLeft: '2.5%', cursor:'pointer' }}><Link to="/" style={{ textDecoration: 'none', color:'white' }}>findmyGC</Link></h1>
      <SearchBar/>
      <IconLabelButtons></IconLabelButtons>
    </div>
  );
}

export default Header;