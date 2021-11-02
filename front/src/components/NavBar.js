import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = () => {
    return (
        <div className="container-nav">
            <ul>
                <li>
                <Link to={'/electronic'}>Electronic</Link>
                </li>
                <li>
                <Link to={'/checkout-card'}>Carrito de Compras</Link>
                </li>
            </ul>
        </div>
    )
}

