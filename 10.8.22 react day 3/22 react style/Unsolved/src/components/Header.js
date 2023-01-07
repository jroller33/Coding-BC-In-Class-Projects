import React from 'react';
import '../styles/Header.css';

const styles = {
  headerStyle: {
    background: 'red',
  },
}

function Header() {

  return (
    <header style={styles.headerStyle} className="header">
      <h1>Welcome</h1>
    </header>
  );
}

export default Header;
