import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '@/pages/Auth/Login';
import Error404 from '@/_utils/Error404';

const AuthRouter = () => {
    return (
        <Routes>
            <Route index element={<Login />} />
            <Route path="login" element={<Login />} />
            <Route path='*' element={<Error404 />} />
        </Routes>
    );
};

export default AuthRouter;