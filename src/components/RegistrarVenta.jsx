<<<<<<< HEAD
import React, { useEffect, useState, useRef } from 'react'
import alertSucees from "styles/js/alerts";
import alertDelete from "styles/js/alertDelete";
=======
import React, { useEffect, useState } from 'react'
import Alerts from 'styles/js/alerts'
>>>>>>> hu_08_gestionar_roles_y_usuarios

const RegistrarVenta = () => {

    /* useEffect: permite escuchar la interfaz gráfica para ver cuendo cambia 
        useEffect tiene dos inputs:
        
        input 1: función que se ejecuta cada que el input 2 cambia
        input 2: Es un array [] (array de dependencias) que está pendiente todo el tiempo si alguna 
                de las variables que tiene en su interior cambia, si cambia, 
                se ejecuta la función en el input 1.

                *si el array se deja vació, las funciones que estén en el useEffect
                se van a ejecutar al renderizar la página por primera vez. 
    */

    /* useState - Estados: son todas las variables que necesitan cambiar dinámicamente.
       sintaxis: const [nomVariable, setterVariable] = useState(valor inicial para la variable) 
    */

    const [cantItems, setCantItems] = useState(0)
    const [valorUnitario, setValorUnitario] = useState(0)
    const [estadoVenta, setEstadoVenta] = useState('En proceso')
    const [esUnInforme, setEsUnInforme] = useState(false)
    const [nombreVendedor, setNombreVendedor] = useState('')
    const [nombreProducto, setNombreProducto] = useState('')
    const [nombreCliente, setNombreCliente] = useState('')
    const [idProducto, setIdProducto] = useState(0)
    const [documentoCliente, setDocumentoCliente] = useState(0)
    const [colorEstadoVenta, setColorEstadoVenta] = useState('warning')

    useEffect(()=>{
        totalVenta()
    }, [cantItems, valorUnitario]);

    useEffect(()=>{
        if(!esUnInforme){
            setEstadoVenta('En proceso')
            setColorEstadoVenta('warning')
        }else{
            setEstadoVenta('Venta terminada')
            setColorEstadoVenta('success')
        }
    },[esUnInforme])

    const totalVenta = ()=>{
        return cantItems * valorUnitario
    }

    const form = useRef(null)

    const submitForm = (e)=>{
        e.preventDefault();
        const fd = new FormData(form.current);

<<<<<<< HEAD
        const nuevaVariable = {};
        fd.forEach((value, key) => {
            nuevaVariable[key] = value;
        });
        console.log('Datos del formulario', fd);
    };

    return (
        <>       
            <form ref={form} onSubmit={submitForm} className="d-flex justify-content-center align-items-center">
=======
        <>
            
            <form className="needs-validation" noValidate>
>>>>>>> hu_08_gestionar_roles_y_usuarios
                <div className="d-flex flex-wrap m-0 m-sm-2 m-md-3 p-0 p-sm-2 p-md-3 justify-content-center">
                    <input type="number" placeholder="ID de la venta" className="form-control my-3 mx-2" required/>
                    <input type="number" placeholder="ID del vendedor" className="form-control my-3 mx-2" required/>
                    <input onChange={(e) => {setNombreVendedor(e.target.value)}}  type="text" placeholder="Nombre del vendedor" className="form-control my-3 mx-2" required/>
                    <input onChange={(e) => {setIdProducto(e.target.value)}}  type="number" placeholder="ID del producto" className="form-control my-3 mx-2" required/>
                    <input onChange={(e) => {setNombreProducto(e.target.value)}} type="text" placeholder="Nombre del producto" className="form-control my-3 mx-2" required/>
                    <input type="number" onChange={(e)=> {setCantItems(e.target.value)}} placeholder="Cantidad de items" className="form-control my-3 mx-2"/>
                    <input type="number" onChange={(e)=> {setValorUnitario(e.target.value)}} placeholder="Valor unitario del producto" className="form-control my-3 mx-2" required/>
                    <input type="date" className="form-control my-3 mx-2"/>
<<<<<<< HEAD
                    <input onChange={(e) => {setNombreCliente(e.target.value)}} type="number" placeholder="Documento del cliente" className="form-control my-3 mx-2" required/>
                    <input onChange={(e) => {setDocumentoCliente(e.target.value)}} type="text" placeholder="Nombre del cliente" className="form-control my-3 mx-2" required/>
                    {/* <div className=" d-flex justify-content-end flex-wrap my-2"> */}
                    <button onClick={ () => {setEsUnInforme(true)} } className="btn btn-primary rounded mx-3 p-2 my-2 font-weight-bold" type="button">Resumen de la venta</button>
                    <button onClick={ () => alertSucees() } className="btn btn-primary rounded mx-3 p-2 my-2 font-weight-bold" type="submit">Guardar</button>
                    <button onClick={ () => alertDelete() } className="btn btn-danger rounded p-2 my-2 font-weight-bold" type="reset">Eliminar</button>
                        {/* </div> */}
=======
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
                    
>>>>>>> hu_08_gestionar_roles_y_usuarios
                </div>
            </form>
            <div className="d-flex flex-column w-100">
                { esUnInforme && (
                <div className=" d-flex justify-content-center align-items-center border rounded flex-column my-2">
                    <p className="font-weight-bold">

                    Nombre del vendedor: {nombreVendedor} <br />
                    Nombre del cliente: {nombreCliente} <br />
                    Documento del cliente: {documentoCliente} <br />
                    ID del producto: {idProducto} <br />
                    Nombre del producto: {nombreProducto} <br />
                    Cantidad de items: {cantItems} <br />
                    Valor unitario: {valorUnitario} <br />
                    <strong>Total de la venta: {totalVenta()}</strong> <br />

                    </p>
                </div>
                ) }
                <div className={`d-flex align-items-center form-control font-weight-bold text-white bg-${colorEstadoVenta}`}>
                    <span>{`Estado de la venta: ${estadoVenta}`}</span>
                </div>
            </div>
        </>
    )
}

export default RegistrarVenta
