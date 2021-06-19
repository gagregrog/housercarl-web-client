import React from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps {
}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header>
      <h1>Housecarl</h1>
      <Link to="/">Home</Link>
    </header>
  );
};

export default Header;
