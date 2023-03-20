import React from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';
const Layout = ({ children }) => {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(Header, null),
    React.createElement('main', { className: 'main' }, children),
    React.createElement(Footer, null)
  );
};
export default Layout;
