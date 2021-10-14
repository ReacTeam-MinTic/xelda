import {React, useEffect } from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, isAuthenticated, isLoading} = useAuth0()

    useEffect(() => {
        console.log(user, isAuthenticated, isLoading)
    }, [user, isAuthenticated, isLoading])

    if(isLoading) return <div><h2>Loading...</h2></div>

    return isAuthenticated ? 
    ( 
        <>
            { children } 
        </> 
     )
    :
    (
        <>
            <div className="display-2 text-danger">No estás autorizado para ver este sitio</div> 
            <Link to="/">Regístrate</Link>
        </>
    )
        
}

export default PrivateRoute
