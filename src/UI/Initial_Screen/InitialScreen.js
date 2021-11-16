import React from 'react';
import employed from '../../pictures/employed.svg';
import client from '../../pictures/client.svg';
import { Link } from 'react-router-dom';

export const InitialScreen = () => {
    return (
        <section className="initial_screen">
            <article>
                <img src={client} alt="client" />
                <Link to="/public/menu">
                    <button className="btn btn-primary">
                    SOY CLIENTE
                    </button>
                </Link>
            </article>
            <article>
                <img src={employed} alt="employed" />
                <Link to="/public/auth">
                    <button className="btn btn-primary">
                    SOY EMPLEADO
                    </button>
                </Link>
            </article>
        </section>
    )
}
