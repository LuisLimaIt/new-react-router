import React from 'react';
import { useNavigate, Outlet } from 'react-router';

export default function Products() {

    const navigate = useNavigate();

    return (
        <>
            <h1>
                Products
                <button onClick={() => navigate('/')}>Painel</button>
            </h1>
            <Outlet />

        </>
    )
}