import React, {memo} from 'react';
import { useLocation } from 'react-router-dom'
import { NavList, LinkStyled } from './Navs.styled';

const Links = [
  { to: '/', text: 'Home' },
  { to: '/Starred', text: 'Starred' },
];

const Nav = ({theme}) => {
  const location = useLocation()
  const setTheme = !theme ? 'dark-theme' : 'light'
  return (
    <div>
      <nav>
        <NavList>
          {Links.map(link => (
            <li key={link.to} className = {setTheme}>
              <LinkStyled to={link.to} className={link.to===location.pathname?`active ${setTheme}`:setTheme }>{link.text}</LinkStyled>
            </li>
          ))}
        </NavList>
      </nav>
    </div>
  );
};

export default memo(Nav);
