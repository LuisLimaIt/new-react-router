import React from 'react';
import { useNavigate, Outlet, Link } from 'react-router-dom';

export default function Products() {

    const navigate = useNavigate();

    return (
        <>
            <h1>
                Products
                <button onClick={() => navigate('/')}>Painel</button>
            </h1>
            <h3>
                <Link to="purchases">Compras</Link> <br />
                <Link to="password">Altere sua senha</Link>
            </h3>
            <Outlet />

        </>
    )
}