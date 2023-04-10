import React from 'react';
import HomePage from '../../pages/HomePage';
import AboutPage from '../../pages/AboutPage';
import FormPage from '../../pages/FormPage';
import NotFoundPage from '../../pages/NotFoundPage';

export const routes = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/form',
    element: <FormPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];
