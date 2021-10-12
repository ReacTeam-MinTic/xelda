import React, { useEffect, useState, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Card from "components/Card";
import Alerts from "styles/js/alerts";
import 'styles/styles.css'
import 'react-toastify/dist/ReactToastify.css'
import { nanoid } from 'nanoid';
import axios from "axios";
import { obtenerVentas } from 'utils/api'
import { data } from 'jquery';

const Ventas = () => {
  const [mostrarTabla, setMostrarTabla] = useState(true);
  const [ventas, setVentas] = useState([]);
  const [textoBoton, setTextoBoton] = useState('Registrar una nueva venta');
  const [colorBoton, setColorBoton] = useState('primary');
  const [ejecutarConsulta, setEjecutarConsulta] = useState(true);

  useEffect(() => {
    console.log('consulta', ejecutarConsulta);
    if (ejecutarConsulta) {
      obtenerVentas(setVentas, setEjecutarConsulta);
    }
  }, [ejecutarConsulta]);

  useEffect(() => {
    //obtener lista de vehículos desde el backend
    if (mostrarTabla) {
      setEjecutarConsulta(true);
    }
  }, [mostrarTabla]);

  useEffect(() => {
    if (mostrarTabla) {
      setTextoBoton('Registrar una nueva venta');
      setColorBoton('primary');
    } else {
      setTextoBoton('Mostrar listado de ventas');
      setColorBoton('success');
    }
  }, [mostrarTabla]);
  return (
    <>
      <Card 
      titulo="Módulo de Ventas"
      subtitulo="Administrar Ventas"
      ruta1="Inicio"
      ruta2="Ventas"
      ruta3="Formulario de ventas">
        <div className='d-flex flex-column justify-content-start p-2'>
          <div className='d-flex justify-content-end p-2'>
            <button
              onClick={() => {
                setMostrarTabla(!mostrarTabla);
              }}
              className={`text-white btn btn-lg btn-icon icon-left btn-${colorBoton}`}
              >{textoBoton}
            </button>
          </div>
          {mostrarTabla ? (
            <TablaVentas listaVentas={ventas} setEjecutarConsulta={setEjecutarConsulta}/>
          ) : (
            <FormularioCreacionVentas
              setMostrarTabla={setMostrarTabla}
              listaVentas={ventas}
              setVentas={setVentas}
            />
          )}

          <ToastContainer position='bottom-center' autoClose={5000} />
        </div>
      </Card> 
    </>
  );
};

const TablaVentas = ({ listaVentas, setEjecutarConsulta }) => {

  return (
    <div className="table-responsive">
      <table id="example" className="table table-striped table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre del vendedor</th>
            <th>Descripción de la venta</th>
            <th>Cantidad</th>
            <th>Valor unitario</th>
            <th>Valor total</th>
            <th>Estado</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
        {listaVentas.map((venta) => {
          return (
            <FilaVenta key={ nanoid() }
            venta = {venta}
            setEjecutarConsulta={setEjecutarConsulta}
            />
          );
        })}
        </tbody>
      </table>
    </div>
  );
};

const FilaVenta = ( {venta, setEjecutarConsulta} )=>{

  const [edit, setEdit] = useState(false)
  const [infoNuevaVenta, setInforNuevaVenta] = useState({
    id: venta.id,
    nomVendedor: venta.nomVendedor,
    nomProducto: venta.nomProducto,
    cantidad: venta.cantidad
  }) 
  const actualizarVenta = async () => {
    //enviar la info al backend
    const options = {
      method: 'PATCH',
      url: 'http://localhost:5000/ventas/actualizarventa',
      headers: { 'Content-Type': 'application/json' },
      data: { ...infoNuevaVenta, id: venta._id },
    };

    await axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        toast.success('Venta modificada con éxito');
        setEdit(false);
        setEjecutarConsulta(true);
      })
      .catch(function (error) {
        toast.error('Error modificando la venta');
        console.error(error);
      });
  };

  const eliminarVenta = async () => {
    const options = {
      method: 'DELETE',
      url: 'http://localhost:5000/ventas/eliminarventa',
      headers: { 'Content-Type': 'application/json' },
      data: { id: venta._id },
    };

    await axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        toast.success('Venta eliminada con éxito');
        setEjecutarConsulta(true);
      })
      .catch(function (error) {
        console.error(error);
        toast.error('Error eliminando la venta');
      });
  };

  return(
    <tr>
      { edit ? 
      (
        <>
          <td><input className="border rounded" type="text" 
          value={infoNuevaVenta.id}
          onChange={e=>setInforNuevaVenta({...setInforNuevaVenta, id: e.target.value})}
          /></td>
          <td><input className="border rounded" type="text" 
          value={infoNuevaVenta.nomVendedor}
          onChange={e=>setInforNuevaVenta({...setInforNuevaVenta, nomVendedor: e.target.value})}
          /></td>
          <td><input className="border rounded" type="text" 
          value={infoNuevaVenta.nomProducto}
          onChange={e=>setInforNuevaVenta({...setInforNuevaVenta, nomProducto: e.target.value})}
          /></td>
          <td><input className="border rounded" type="text" 
          value={infoNuevaVenta.cantidad}
          onChange={e=>setInforNuevaVenta({...setInforNuevaVenta, cantidad: e.target.value})}
          /></td>
        </>
      )
      :
      (
        <>
          <td>{venta.id}</td>
          <td>{venta.nomVendedor}</td>
          <td>{venta.nomProducto}</td>
          <td>{venta.cantidad}</td>
        </>
      )}
      <td>{venta.valor}</td>
      <td>{venta.total}</td>
      <td>
        <div className={venta.estado === "Entregada" ? ('badge badge-success'): ('badge badge-danger')}>
          {venta.estado}
        </div>
      </td>
      <td>
        <div className="d-flex justify-content-around">
          { edit ? 
            ( 
              <i onClick={()=> actualizarVenta()} class="fas fa-check" />
            )
            : 
            (
              <i onClick={()=> setEdit(!edit)} className="fas fa-pen pointer"></i>
            )}
          <i onClick={()=> eliminarVenta()} className="fas fa-trash-alt eliminar"></i>
        </div>
      </td>
    </tr>
  )
}

const FormularioCreacionVentas = ({ setMostrarTabla }) => {

  const [cantItems, setCantItems] = useState(0)
  const [valorUnitario, setValorUnitario] = useState(0)
  const [estado, setEstado] = useState('En proceso')

  useEffect(()=>{
    totalVenta()
  }, [cantItems, valorUnitario]);

  const totalVenta = ()=>{
      return cantItems * valorUnitario
  }

  const form = useRef(null);

  const submitForm = async (e) => {
    e.preventDefault();
    const fd = new FormData(form.current);
    
    const nuevaVenta = {};
    fd.forEach((value, key) => {
      nuevaVenta[key] = value;
    });

    console.log("nueva venta: ", nuevaVenta)
    const options = {
      method: 'POST',
      url: 'http://localhost:5000/ventas/nuevaventa',
      headers: { 'Content-Type': 'application/json' },
      data: { id: nuevaVenta.id, nomVendedor: nuevaVenta.nomVendedor, nomProducto: nuevaVenta.nomProducto, cantidad: nuevaVenta.cantidad }
      
    };
    console.log(options.data)
    
    await axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        toast.success('Venta agregado con éxito');
      })
      .catch(function (error) {
        console.error(error);
        toast.error('Error creando la venta');
      });

    setMostrarTabla(true);
  };

  return (
  <>
    <form ref={form} onSubmit={submitForm}>
      <div className="card-header">
        <h4>Crear nueva venta</h4>
      </div>
      <div className="card-body">
        <div className="card-body">
          <div className="form-group">
            <label htmlFor="id">Id de la venta</label>
            <input type="number" className="form-control" name='id' required />
          </div>
          <div className="form-group">
            <label>ID del vendedor</label>
            <input type="number" name='idVendedor' className="form-control" required />
          </div>
          <div className="form-group">
            <label>Nombre del vendedor</label>
            <input type="text" name='nomVendedor' className="form-control" required />
          </div>
          <div className="form-group">
            <label>Documento de identidad del cliente</label>
            <input type="number" name='diCliente' className="form-control" required />
          </div>
          <div className="form-group">
            <label>Nombre del cliente</label>
            <input type="text" name='nomCliente'className="form-control" required />
          </div>
          <div className="form-group">
            <label>ID del producto</label>
            <input type="number" name='idProducto'className="form-control" required />
          </div>
          <div className="form-group">
            <label>Nombre del producto</label>
            <input type="text" name='nomProducto' className="form-control" required />
          </div>
          <div className="form-group">
            <label>Valor unitario</label>
            <input onChange={(e)=> {setCantItems(e.target.value)}} type="number" name='valor'className="form-control" required />
          </div>
          <div className="form-group">
            <label>Cantidad de items</label>
            <input onChange={(e)=> {setValorUnitario(e.target.value)}} type="number" name='cantidad'className="form-control" required />
          </div>
          <div className="form-group">
            <label>Total de la venta</label>
            <input value={totalVenta()} type="number" name='total' className="form-control" readOnly/>
          </div>
          <div className="form-group">
            <label>Estado de la venta</label>
            <input value={estado} type="text" name='estado' className="form-control" readOnly/>
          </div>
        </div>
      </div>
      <div className=" d-flex justify-content-end flex-wrap my-2">
        <button
          onClick={()=>{setEstado('Entregada')}}
          className="btn btn-primary btn-lg rounded mx-2 my-2"
          type="submit"
        >
          Guardar
        </button>
        <button
          onClick={Alerts[1]}
          className="btn btn-danger btn-lg rounded mx-2 my-2"
          type="reset"
        >
          Eliminar
        </button>
      </div>
    </form>
  </>
  );
};

export default Ventas;