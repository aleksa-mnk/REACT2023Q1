import React from 'react';
import { NavLink } from 'react-router-dom';
import { navData } from '../../../core/config/route';

const Header = () => {
  return (
    <header className="header">
      {navData.map(({ title, logo, path }) => (
        <div key={path} className="header__item">
          {logo ? (
            <NavLink to={path} className="header__link header__logo">
              <img src={logo} alt="Logo" />
            </NavLink>
          ) : (
            <NavLink
              to={path}
              className={`header__link ${location.pathname === path ? 'header__link--active' : ''}`}
            >
              {title}
            </NavLink>
          )}
        </div>
      ))}
    </header>
  );
};

export default Header;
