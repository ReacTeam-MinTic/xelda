import React from 'react'

const RegistrarVenta = () => {
    return (
        <>
            <div className="d-flex justify-content-end">
                <button className="btn btn-success p-2 "><h6 className="m-0">+ Nueva venta</h6></button>
            </div>
            
            <h1>Módulo de Ventas</h1>

            <form >
                <span>Item #</span>
                <input type="text" placeholder="Nombre del producto" className="my-3 mx-2"/>
                <input type="number" placeholder="cantidad de items" className="my-3 mx-2"/>
                <input type="number" placeholder="Valor unitario" className="my-3 mx-2"/>
                <button className="btn btn-success mx-3" type="submit">Guardar</button>
                <button className="btn btn-danger" type="reset">Eliminar</button>
            </form>
        </>
    )
}

export default RegistrarVenta
