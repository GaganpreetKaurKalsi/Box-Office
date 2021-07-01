import React from 'react';
import { Link } from 'react-router-dom';

const Links = [
  { to: '/', text: 'Home' },
  { to: '/About', text: 'About' },
];

const Nav = () => {
  return (
    <div>
      <nav>
        <ul>
          {Links.map(link => (
            <li key={link.to}>
                  <Link to={link.to}>{link.text}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
