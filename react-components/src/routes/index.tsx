import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import NotFound from '../pages/NotFound';
import { AppRoutes } from '../core/config/route';

class Router extends React.Component {
  render() {
    return (
      <Routes>
        <Route path={AppRoutes.MAIN} element={<Home />} />
        <Route path={AppRoutes.ABOUT} element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    );
  }
}

export default Router;
