import React, { useEffect, useState, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Card from "components/Card";
import Alerts from "styles/js/alerts";
import 'react-toastify/dist/ReactToastify.css'


const ventasQuemadas = [
  {
    id: '1',
    nomVendedor: 'Carlos',
    nomProducto: 'Tenis',
    valor: 300000,
    total: 0,
    cantidad: 1,
    estado: 'En proceso'
  },
  {
    id: '2',
    nomVendedor: 'Raul',
    nomProducto: 'Chaqueta',
    valor: 300000,
    total: 0,
    cantidad: 1,
    estado: 'En proceso'
  },
  {
    id: '3',
    nomVendedor: 'Andrés',
    nomProducto: 'Pantalon',
    valor: 300000,
    total: 0,
    cantidad: 1,
    estado: 'En proceso'
  },
];

const FormVentas = () => {
  const [mostrarTabla, setMostrarTabla] = useState(true);
  const [ventas, setVentas] = useState([]);
  const [textoBoton, setTextoBoton] = useState('Registrar una nueva venta');
  const [colorBoton, setColorBoton] = useState('primary');

  useEffect(() => {
    setVentas(ventasQuemadas);
  }, []);

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
            <TablaVentas listaVentas={ventas} />
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

const TablaVentas = ({ listaVentas }) => {
  useEffect(() => {
    console.log('este es el listado de ventas en el componente de tabla', listaVentas);
  }, [listaVentas]);

  return (
    <div className="table-responsive">
        <table id="example" className="table table-striped">
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
              <tr>
                <td>{venta.id}</td>
                <td>{venta.nomVendedor}</td>
                <td>{venta.nomProducto}</td>
                <td>{venta.cantidad}</td>
                <td>{venta.valor}</td>
                <td>{venta.total}</td>
                <td>{venta.estado}</td>
              </tr>
            );
          })}
          </tbody>
        </table>
      </div>
  );
};

const FormularioCreacionVentas = ({ setMostrarTabla, listaVentas, setVentas }) => {

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

  const submitForm = (e) => {
    e.preventDefault();
    const fd = new FormData(form.current);
    console.log(estado)
    
    const nuevaVenta = {};
    fd.forEach((value, key) => {
      nuevaVenta[key] = value;
    });

    setMostrarTabla(true);
    
    setVentas([...listaVentas, nuevaVenta]);
    // identificar el caso de éxito y mostrar un toast de éxito
    toast.success('Venta agrega con éxito');
    // identificar el caso de error y mostrar un toast de error
    // toast.error('Error creando un Venta');
  };

  return (
  <>
    <form ref={form} onSubmit={submitForm}>
      <div className="card-header">
        <h4>Crear nueva venta</h4>
      </div>
      <div className="card-body">
        <div class="card-body">
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
            <input value={estado} type="text" name='estado' className="form-control" />
          </div>
        </div>
      </div>
      <div className=" d-flex justify-content-end flex-wrap my-2">
        <button
          onClick={()=>{setEstado('Finalizada')}}
          className="btn btn-primary btn-lg rounded mx-2 my-2"
          type="submit"
        >
          Guardar
        </button>
        <button
          onClick={Alerts[1]}
          className="btn btn-danger btn-lg  rounded mx-2 my-2"
          type="reset"
        >
          Eliminar
        </button>
      </div>
    </form>
  </>
  );
};

export default FormVentas;