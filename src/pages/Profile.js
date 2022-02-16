import React from 'react';
import { useParams } from 'react-router-dom';

export default function Profile() {
    // useParams dá acesso ao id da rota
    const {id} = useParams();
    return (
        <h1>Profile: {id}</h1>
    )
}