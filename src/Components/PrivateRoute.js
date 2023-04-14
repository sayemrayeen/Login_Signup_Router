import React from 'react'
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ isLoggedIn, children }) => {
    if (isLoggedIn) {
        return children;
    } else {
        <Navigate to="/login" />
    }
    return (
        <div>

        </div>
    )
}

export default PrivateRoute
