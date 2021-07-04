import React from 'react';
import { useLocation } from 'react-router-dom'
import { NavList, LinkStyled } from './Navs.styled';

const Links = [
  { to: '/', text: 'Home' },
  { to: '/Starred', text: 'Starred' },
];

const Nav = () => {
  const location = useLocation()
  return (
    <div>
      <nav>
        <NavList>
          {Links.map(link => (
            <li key={link.to}>
                  <LinkStyled to={link.to} className={link.to===location.pathname?'active':''}>{link.text}</LinkStyled>
            </li>
          ))}
        </NavList>
      </nav>
    </div>
  );
};

export default Nav;
