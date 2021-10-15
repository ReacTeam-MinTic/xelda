import {React, useEffect } from 'react'
import { useAuth0 } from "@auth0/auth0-react";

const PrivateRoute = ({ children }) => {
    const { user, isAuthenticated, isLoading, loginWithRedirect, getAccessTokenSilently } = useAuth0()

    useEffect(() => {
        const fetchAuth0Token = async ()=>{
            const accessToken = await getAccessTokenSilently({
                audience: 'api-autenticacion-xelda' 
            })
            localStorage.setItem('token', accessToken)
        }
        if(isAuthenticated){
            fetchAuth0Token()
        }
    }, [isAuthenticated, getAccessTokenSilently])

    if(isLoading) return <div><h2>Loading...</h2></div>

    if(!isAuthenticated){
        return loginWithRedirect()
    }
    
   return <> { children } </> 
        
}

export default PrivateRoute
