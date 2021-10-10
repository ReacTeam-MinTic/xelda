import React, { useEffect, useState, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Card from "components/Card";
import Alerts from "styles/js/alerts";


const vehiculosBackend = [
  {
    id: '1',
    vendedor: 'Carlos',
    descripcion: 'Tenis',
    total: 300000,
    estado: 'En proceso'
  },
  {
    id: '2',
    vendedor: 'Raul',
    descripcion: 'Chaqueta',
    total: 300000,
    estado: 'En proceso'
  },
  {
    id: '3',
    vendedor: 'Andrés',
    descripcion: 'Pantalon',
    total: 300000,
    estado: 'En proceso'
  },
];

const FormVentas = () => {
  const [mostrarTabla, setMostrarTabla] = useState(true);
  const [vehiculos, setVehiculos] = useState([]);
  const [textoBoton, setTextoBoton] = useState('Crear Nuevo Vehículo');
  const [colorBoton, setColorBoton] = useState('primary');

  useEffect(() => {
    
    setVehiculos(vehiculosBackend);
  }, []);

  useEffect(() => {
    if (mostrarTabla) {
      setTextoBoton('Crear una nueva venta');
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
      ruta2="Productos"
      ruta3="Formulario de ventas">
        <div className='d-flex flex-column justify-content-start p-2'>
          <div className='d-flex justify-content-end p-2'>
            <button
              onClick={() => {
                setMostrarTabla(!mostrarTabla);
              }}
              className={`text-white btn btn-lg btn-icon icon-left btn-${colorBoton}`}
            >
              {textoBoton}
            </button>
          </div>
          {mostrarTabla ? (
            <TablaVehiculos listaVehiculos={vehiculos} />
          ) : (
            <FormularioCreacionVehiculos
              setMostrarTabla={setMostrarTabla}
              listaVehiculos={vehiculos}
              setVehiculos={setVehiculos}
            />
          )}
          <ToastContainer position='bottom-center' autoClose={5000} />
        </div>
      </Card> 
    </>
  );
};

const TablaVehiculos = ({ listaVehiculos }) => {
  useEffect(() => {
    console.log('este es el listado de vehiculos en el componente de tabla', listaVehiculos);
  }, [listaVehiculos]);
  return (

    <div className="table-responsive">
        <table id="example" className="table table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre del vendedor</th>
              <th>Descripción de la venta</th>
              <th>Valor total</th>
              <th>Estado</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
          {listaVehiculos.map((vehiculo) => {
            return (
              <tr>
                <td>{vehiculo.id}</td>
                <td>{vehiculo.vendedor}</td>
                <td>{vehiculo.descripcion}</td>
                <td>{vehiculo.total}</td>
                <td>{vehiculo.estado}</td>
              </tr>
            );
          })}
          </tbody>
        </table>
      </div>
  );
};

const FormularioCreacionVehiculos = ({ setMostrarTabla, listaVehiculos, setVehiculos }) => {
  const form = useRef(null);

  const submitForm = (e) => {
    e.preventDefault();
    const fd = new FormData(form.current);
    
    const nuevoVehiculo = {};
    fd.forEach((value, key) => {
      nuevoVehiculo[key] = value;
    });

    setMostrarTabla(true);
    setVehiculos([...listaVehiculos, nuevoVehiculo]);
    // identificar el caso de éxito y mostrar un toast de éxito
    toast.success('Vehículo agregado con éxito');
    // identificar el caso de error y mostrar un toast de error
    // toast.error('Error creando un vehículo');
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
            <label>Id</label>
            <input
              type="number"
              className="form-control is-valid"
              name='id'
              required
            />
          </div>
          <div className="form-group">
            <label>Nombre</label>
            <input type="text" name='nombre' className="form-control is-valid" required />
          </div>
          <div className="form-group">
            <label>Valor Unitario</label>
            <input type="number" name='valor'className="form-control" required />
          </div>
          <div class="form-group">
            <label>Estado</label>
            <select name='estado' class="form-control select2" defaultValue={0} required>
            <option disabled value={0}>
              Seleccione una opción
            </option>
              <option>Disponible</option>
              <option>Sin Existencias</option>
            </select>
          </div>
          <div class="form-group mb-0">
            <label>Message</label>
            <textarea class="form-control" required=""></textarea>
          </div>
        </div>
      </div>
      <div className=" d-flex justify-content-end flex-wrap my-2">
        <button
          onClick={Alerts[0]}
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