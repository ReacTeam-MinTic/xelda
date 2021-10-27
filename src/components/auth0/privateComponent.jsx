import { useUser } from 'context/userContext';
import React from 'react'

const PrivateComponent = ({rolesList, children}) => {
    
    const {userData} = useUser();
    if(rolesList.includes(userData.role)){
        return children;
    }
    return <></>
}

export default PrivateComponent


