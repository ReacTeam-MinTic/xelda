import React from 'react'

const ButtonSerarch = ({busqueda, setBusqueda}) => {
    return (
        <div className="search-element">
        <input value={busqueda} onChange={(e)=> setBusqueda(e.target.value)} className="form-control" type="search" placeholder="Buscar" aria-label="Search" data-width={250} style={{width: 250}} />
        <br></br>
      </div>
    )
}

export default ButtonSerarch;