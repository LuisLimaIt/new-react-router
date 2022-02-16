import React from 'react';
import {
    Routes,
    Route
} from 'react-router-dom';

import Dashboard from './Dashboard';
import Products from './Products';
import Profile from './Profile';

export default function MainRoutes() {
    return (
        // Routes: Deve envolver todas as rotas, ele controla qual elemento será renderizado
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/profile/:id" element={<Profile />} />

            <Route path="/products" element={<Products />} >
                <Route path="purchases" element={<h1>Compras</h1>} />
                <Route path="password" element={<h1>Alterar senha</h1>} />
            </Route>

            <Route path="*" element={<h1>Not found =P</h1>} />
        </Routes>
    )
}