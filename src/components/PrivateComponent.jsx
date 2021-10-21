import React from 'react'

const PrivateComponent = ({ roleList, children}) => {

    if(roleList.includes('admin')){
        return children
    }

    return <></>
}

export default PrivateComponent
