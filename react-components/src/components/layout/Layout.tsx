import React from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';

interface LayoutProps {
    children: JSX.Element;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <Header />
            <main className="main">{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
