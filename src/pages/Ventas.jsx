import React from 'react'
import LayoutsCard from "layouts/layouts-card";

const Ventas = () => {  
    return (
        <>
            <LayoutsCard titulo="Ventas" subtitulo="Listado de ventas">
                <div className="d-flex justify-content-end">
                    <button className="btn btn-success"><strong>Realizar nueva venta</strong></button>
                </div>
                
                <h1>Modulo de Ventas</h1>

                <form >
                    <input type="text" placeholder="Nombre del producto" className="my-3 mx-2"/>
                    <input type="number" placeholder="cantidad de items" className="my-3 mx-2"/>
                    <input type="number" placeholder="Valor unitario" className="my-3 mx-2"/>
                    <button className="btn btn-success mx-3" type="submit">Guardar</button>
                    <button className="btn btn-danger" type="reset">Eliminar</button>
                </form>
            </LayoutsCard>
        </>
    )
}

export default Ventas
