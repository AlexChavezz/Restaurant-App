import React from 'react'
import img from '../../pictures/unaccess.svg';
export const EmployedView = () => {
    return (
        <>
           <img src={img} alt="unaccesible" />
           <h2>No tienes los permisos</h2>
        </>
    )
}
