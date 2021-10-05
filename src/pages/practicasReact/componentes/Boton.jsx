import React from 'react'

const Boton = ({change, variable}) => {
    return (
        <>
        <br/>
        <button onClick={change}>{variable}</button>  
        <br/>
        </>
    )
}

export default Boton
