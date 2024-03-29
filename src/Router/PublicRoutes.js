import React from 'react'
import { Navigate } from 'react-router-dom';

export const PublicRoutes = ({ children, isLoggedIn }) => {
    return !isLoggedIn ?
        children
        :
        <Navigate to="/private/manage/menu" />
}
