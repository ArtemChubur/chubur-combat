import React from 'react';
import {Route, Routes} from "react-router-dom";
import HomePgae from "../pages/HomePgae";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";

const MainRoutes = () => {
    return (
        <Routes>
            <Route path={'/'} element={<HomePgae />}/>
            <Route path={'/login'} element={<LoginPage />}/>
            <Route path={'/register'} element={<RegisterPage />}/>
        </Routes>
    );
};

export default MainRoutes;