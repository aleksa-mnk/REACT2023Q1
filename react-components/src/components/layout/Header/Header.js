import React from 'react';
import { NavLink } from 'react-router-dom';
import { navData } from '../../../core/config/route';
const Header = () => {
  return React.createElement(
    'header',
    { className: 'header' },
    navData.map(({ title, logo, path }) =>
      React.createElement(
        'div',
        { key: path, className: 'header__item' },
        logo
          ? React.createElement(
              NavLink,
              { to: path, className: 'header__link header__logo' },
              React.createElement('img', { src: logo, alt: 'Logo' })
            )
          : React.createElement(
              NavLink,
              {
                to: path,
                className: `header__link ${
                  location.pathname === path ? 'header__link--active' : ''
                }`,
              },
              title
            )
      )
    )
  );
};
export default Header;
