import {React } from 'react'
import { useAuth0 } from "@auth0/auth0-react";

const PrivateRoute = ({ children }) => {
    const { user, isAuthenticated, isLoading, loginWithRedirect} = useAuth0()

    if(isLoading) return <div><h2>Loading...</h2></div>

    if(!isAuthenticated){
        return loginWithRedirect()
    }
    
   return <> { children } </> 
        
}

export default PrivateRoute
