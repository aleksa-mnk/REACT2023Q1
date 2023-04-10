import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { HEADER_LINKS } from '../../core/constants/routes';
import { useEffect, useState } from 'react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const threshold = 100;
      setScrolled(scrollTop > threshold);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`h ${scrolled ? 'scroll' : ''}`}>{}</div>
      <header className="header">
        <nav className="header__nav">
          {HEADER_LINKS.map(({ path, name }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) => (isActive ? 'header__link _active' : 'header__link')}
            >
              {name}
            </NavLink>
          ))}
        </nav>
      </header>
    </>
  );
};

export default Header;
