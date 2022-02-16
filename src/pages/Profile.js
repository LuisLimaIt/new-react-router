import React from 'react';
import { useParams , useNavigate } from 'react-router-dom';

export default function Profile() {
    // useParams dá acesso ao id da rota
    const {id} = useParams();

    const navigate = useNavigate();

    return (
        <h1>
            Profile: {id}
            <button onClick={() => navigate('/')}>Painel</button>    
        </h1>
    )
}