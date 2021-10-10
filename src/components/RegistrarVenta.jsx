import React, { useEffect, useState } from 'react'
import Alerts from 'styles/js/alerts'

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
            
            <form className="needs-validation" noValidate>
                <div className="d-flex flex-wrap m-0 m-sm-2 m-md-3 p-0 p-sm-2 p-md-3 justify-content-center">
                    <input type="number" placeholder="ID de la venta" className="form-control my-3 mx-2"/>
                    <input type="number" placeholder="ID del vendedor" className="form-control my-3 mx-2"/>
                    <input type="text" placeholder="Nombre del vendedor" className="form-control my-3 mx-2"/>
                    <input type="number" placeholder="ID del producto" className="form-control my-3 mx-2"/>
                    <input type="text" placeholder="Nombre del producto" className="form-control my-3 mx-2"/>
                    <input type="number" onChange={(e)=> {setCantItems(e.target.value)}} placeholder="Cantidad de items" className="form-control my-3 mx-2"/>
                    <input type="number" onChange={(e)=> {setValorUnitario(e.target.value)}} placeholder="Valor unitario del producto" className="form-control my-3 mx-2"/>
                    <input type="date" className="form-control my-3 mx-2"/>
                    <input type="text" placeholder="Documento del cliente" className="form-control my-3 mx-2"/>
                    <input type="text" placeholder="Nombre del cliente" className="form-control my-3 mx-2"/>
                    <div className="d-flex flex-column w-100">
                        <div className=" d-flex justify-content-center flex-column my-2">
                            <p className="form-control font-weight-bold"><strong>Total de la venta: {totalVenta()}</strong> </p>
                            <p className="form-control font-weight-bold"><strong>Estado de la venta: {estadoVenta}</strong></p>
                        </div>
                        <div className=" d-flex justify-content-end flex-wrap my-2">
                            <button onClick={ Alerts[0] } className="btn btn-primary btn-lg rounded mx-2 my-2" type="button">Guardar</button>
                            <button onClick={ Alerts[1] }className="btn btn-danger btn-lg  rounded mx-2 my-2" type="reset">Eliminar</button>
                        </div>
                    </div>
                    
                </div>
            </form>
   
        </>
    )
}

export default RegistrarVenta
