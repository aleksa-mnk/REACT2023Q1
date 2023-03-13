import React from 'react';
import { NavLink } from 'react-router-dom';
import { navData } from '../../../core/config/route';

const Header = () => {
    return (
        <header className="header">
            {navData.map(({ title, path }) => (
                <div key={path} className="header__item">
                    <NavLink
                        className="header__link"
                        activeClassName="header__link--active"
                        to={path}
                    >
                        {title}
                    </NavLink>
                </div>
            ))}
        </header>
    );
};

export default Header;
