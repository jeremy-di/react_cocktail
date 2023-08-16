import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Layout, Home, Service, Contact } from '@/pages/Public'

import Error404 from '@/_utils/Error404'

const PublicRouter = () => {
    return (
        <Routes>
            {/* Routes existantes */}
            <Route element={<Layout />}>
                <Route index element={<Home />} />

                <Route path="/home" element={<Home />} />
                <Route path="/service" element={<Service />} />
                <Route path="/contact" element={<Contact />} />
                {/* Routes erreurs */}
                <Route path="*" element={<Error404 />} />
            </Route>
          </Routes>
    );
};

export default PublicRouter;