import React, { useEffect, useState } from 'react'

const RegistrarVenta = () => {

    const [idVenta, setIdVenta] = useState(0)
    const [cantItems, setCantItems] = useState(0)
    const [valorUnitario, setValorUnitario] = useState(0)
    const [estadoVenta, setEstadoVenta] = useState('En proceso')


    useEffect(()=>{
        aumentarIdVentas()
    }, []);

    useEffect(()=>{
        totalVenta()
    }, [cantItems, valorUnitario]);

    const aumentarIdVentas = () =>{
        return setIdVenta(idVenta + 1)
    }

    const totalVenta = ()=>{
        return cantItems * valorUnitario
    }

    return (

        <>
            <form className="d-flex justify-content-center align-items-center">
                <div className="d-flex flex-wrap m-0 m-sm-2 m-md-3 p-0 p-sm-2 p-md-3 justify-content-center">
                    <p className="m-1">ID de la venta {idVenta} </p>
                    <input type="number" placeholder="ID del vendedor" className="form-control my-3 mx-2"/>
                    <input type="text" placeholder="Nombre del vendedor" className="form-control my-3 mx-2"/>
                    <input type="number" placeholder="ID del producto" className="form-control my-3 mx-2"/>
                    <input type="text" placeholder="Nombre del producto" className="form-control my-3 mx-2"/>
                    <input type="number" onChange={(e)=> {setCantItems(e.target.value)}} placeholder="Cantidad de items" className="form-control my-3 mx-2"/>
                    <input type="number" onChange={(e)=> {setValorUnitario(e.target.value)}} placeholder="Valor unitario del producto" className="form-control my-3 mx-2"/>
                    <input type="date" className="form-control my-3 mx-2"/>
                    <input type="text" placeholder="Documento del cliente" className="form-control my-3 mx-2"/>
                    <input type="text" placeholder="Nombre del cliente" className="form-control my-3 mx-2"/>
                    <div className=" d-flex flex-fill flex-wrap my-2">
                        <h3 className="mx-5">Total de la venta: {totalVenta()} </h3>
                        <h4>Estado de la venta: {estadoVenta}</h4>
                    </div>

                    <button onClick={ aumentarIdVentas } className="btn btn-success rounded-pill mx-3 p-2 my-2" type="button">Guardar la venta</button>
                    <button className="btn btn-danger rounded-pill p-2 my-2" type="reset">Eliminar la venta</button>
                </div>
                
            </form>
        </>
    )
}

export default RegistrarVenta
