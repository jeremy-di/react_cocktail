import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { ALayout, Dashboard } from '@/pages/Admin';
import { User, UAdd, UEdit } from '@/pages/Admin/User';
import { Cocktail, CEdit } from '@/pages/Admin/Cocktail';

import Error404 from '@/_utils/Error404'
const AdminRouter = () => {
    return (
        <Routes>
            <Route element={<ALayout />} >
                <Route index element={<Dashboard />} />
                <Route path='dashboard' element={<Dashboard />} />
                <Route path='user'>
                    <Route path='index' element={<User />} />
                    <Route path='edit/:id' element={<UEdit />} />
                    <Route path='add' element={<UAdd />} />
                </Route>
                <Route path='cocktail'>
                    <Route path='index' element={<Cocktail />} />
                    <Route path='edit' element={<CEdit />} />
                </Route>
                    <Route path='*' element={<Error404 />} />
            </Route>
        </Routes>
    );
};

export default AdminRouter;