import React from 'react'

const RegistrarVenta = () => {
    return (
        <>
            <form className="d-flex justify-content-center align-items-center">
                <p className="m-1">Item #</p>
                <input type="text" placeholder="Nombre del producto" className="form-control my-3 mx-2"/>
                <input type="number" placeholder="cantidad de items" className="form-control my-3 mx-2"/>
                <input type="number" placeholder="Valor unitario" className="form-control my-3 mx-2"/>
                <button className="btn btn-success rounded-pill mx-3" type="submit">Guardar</button>
                <button className="btn btn-danger rounded-pill " type="reset">Eliminar</button>
            </form>
        </>
    )
}

export default RegistrarVenta
