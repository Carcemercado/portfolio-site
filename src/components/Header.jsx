import React from 'react';
import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'
    
function Header() {
  return (
    <header className="header">
        <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      
    </header>
  );
}

export default Header;
    