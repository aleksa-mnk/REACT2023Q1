import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from "../pages/Home";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import { AppRoutes } from '../core/config/route';

class Router extends React.Component {
    render() {
        return (
            <Routes>
                <Route path={AppRoutes.MAIN} element={<Home />} />
                <Route path={AppRoutes.ABOUT} element={<About />} />
                <Route path={AppRoutes.NOT_FOUND_PAGE} element={<NotFound />} />
                <Route path="*" element={<Navigate replace to={AppRoutes.NOT_FOUND_PAGE} />} />
            </Routes>
        );
    }
}

export default Router;