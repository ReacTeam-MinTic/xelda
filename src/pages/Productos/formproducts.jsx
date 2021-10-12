import React from "react";
import Card from "components/Card";
import Alerts from "styles/js/alerts";

const FormProducsts = () => {
  return (
    <>
      <Card
        titulo="Módulo de Productos"
        subtitulo="Agregar producto"
        ruta1="Inicio"
        ruta2="Productos"
        ruta3="Formulario de productos"
        boton="Mostrar todos"
        icon="fas fa-list"
        rutaheadercard="/listproducts"
      >
        <form className="needs-validation" noValidate>
          <div className="card-header">
            <h4>Formulario de registro</h4>
          </div>
          <div className="card-body">
            <div className="card-body">
              <div className="form-group">
                <label>Id</label>
                <input
                  type="number"
                  className="form-control is-valid"
                  required
                />
              </div>
              <div className="form-group">
                <label>Nombre</label>
                <input type="text" className="form-control is-valid" required />
              </div>
              <div className="form-group">
                <label>Valor Unitario</label>
                <input type="number" className="form-control" required />
              </div>
              <div className="form-group">
                <label>Estado</label>
                <select className="form-control select2">
                  <option>Disponible</option>
                  <option>Sin Existencias</option>
                </select>
              </div>
              <div className="form-group mb-0">
                <label>Message</label>
                <textarea className="form-control" required=""></textarea>
              </div>
            </div>
          </div>
          <div className=" d-flex justify-content-end flex-wrap my-2">
            <button
              onClick={Alerts[0]}
              className="btn btn-primary btn-lg rounded mx-2 my-2"
              type="button"
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
      </Card>
    </>
  );
};

export default FormProducsts;
