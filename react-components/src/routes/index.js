import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import NotFound from '../pages/NotFound';
import { AppRoutes } from '../core/config/route';
class Router extends React.Component {
  render() {
    return React.createElement(
      Routes,
      null,
      React.createElement(Route, {
        path: AppRoutes.MAIN,
        element: React.createElement(Home, null),
      }),
      React.createElement(Route, {
        path: AppRoutes.ABOUT,
        element: React.createElement(About, null),
      }),
      React.createElement(Route, {
        path: AppRoutes.NOT_FOUND_PAGE,
        element: React.createElement(NotFound, null),
      }),
      React.createElement(Route, {
        path: '*',
        element: React.createElement(Navigate, { replace: true, to: AppRoutes.NOT_FOUND_PAGE }),
      })
    );
  }
}
export default Router;
