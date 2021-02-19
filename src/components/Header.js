import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={header}>
      <h1>Cyber Todo List</h1>
      <Link style={link} to="/">Home</Link> <Link style={link} to="/about">About</Link>
    </header>
  )
}

const header = {
  background: '#004A55',
  color: '#fff',
  textAlign: 'center',
  padding: '5px',
  fontSize: '18px',
  fontWeight: 'bold'
}

const link = {
  color: '#00C8E7',
  textDecoration: 'none',
  fontSize: '14px',
  fontWeight: 'regular' 
}

export default Header;
