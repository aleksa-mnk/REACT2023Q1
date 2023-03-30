import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { HEADER_LINKS } from '../../core/constants/routes';

const Header: React.FC = () => {
  return (
    <header className="header">
      <nav className="header__nav">
        {HEADER_LINKS.map(({ path, name }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive, isPending }) =>
              isPending ? 'header__link' : isActive ? '_active' : ''
            }
          >
            {name}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default Header;
