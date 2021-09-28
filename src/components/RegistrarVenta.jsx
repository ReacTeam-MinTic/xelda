import React from 'react'

const RegistrarVenta = () => {
    return (
        <>
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
