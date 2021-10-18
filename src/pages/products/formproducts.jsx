import React from "react";
import Alerts from "styles/js/alerts";
import { useRef } from "react";
import axios from "axios";

const getToken = () => {
  return `Bearer ${localStorage.getItem('token')}`
}

const FormProducts = ({ setWiewTable, setProductsDb, ProductsDb }) => {
  const form = useRef(null);
  const submitForm = async (e) => {
    e.preventDefault();
    const fd = new FormData(form.current);

    const newProduct = {};
    fd.forEach((value, key) => {
      newProduct[key] = value;
    });

    const options = {
      method: "POST",
      url: "http://localhost:5000/products",
      headers: { 
        "Content-Type": "application/json",
        Authorization: getToken()
      },
      data: {
        cod: newProduct.cod,
        name: newProduct.name,
        description: newProduct.description,
        value_: newProduct.value_,
        value_: newProduct.value_,
      },
    };
    await axios
      .request(options)
      .then(function (response) {
        console.log("data enviada", response.data);
        const bodyAlert = "¡Guardado!"
        const mensaje = "Operación exitosa"
        Alerts.alertSucees(mensaje,bodyAlert);
      })
      .catch(function (error) {
        console.error("Este es el error", error);
        Alerts.alertError();
      });
    setWiewTable(true);
  };

  return (
    <>
      <form ref={form} className="needs-validation" onSubmit={submitForm}>
        <div className="card-header">
          <h4>Formulario de registro</h4>
        </div>
        <div className="card-body">
          <div className="form-group">
            <label htmlFor="cod">Cod</label>
            <input
              autoComplete="nope"
              name="cod"
              type="text"
              className="form-control "
              required
              autoComplete="off"
              placeholder="00001"
            />
            <div className="invalid-feedback">
              El campo no puede quedar vacío.
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="name">Producto</label>
            <input
              autoComplete="nope"
              name="name"
              type="text"
              className="form-control "
              required
              autoComplete="off"
              placeholder="Camilo Camilo"
            />
            <div className="invalid-feedback">
              El campo no puede quedar vacío.
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="description">Descripción</label>
            <input
              name="description"
              type="text"
              className="form-control "
              required
              autoComplete="off"
              placeholder=""
            />
            <div className="invalid-feedback">
              El campo no puede quedar vacío.
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="value">Valor</label>
            <input
              name="value"
              type="text"
              className="form-control "
              required
              autoComplete="off"
              placeholder=""
            />
            <div className="invalid-feedback">
              El campo no puede quedar vacío.
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="status">Estado</label>
            <select
              className="form-control select2"
              name="status"
              defaultValue={0}
            >
              <option disabled value={0}>
                Seleccione un opción
              </option>
              <option>Disponible</option>
              <option>No Disponible</option>
            </select>
            <div className="invalid-feedback">
              El campo no puede quedar vacío.
            </div>
          </div>
        </div>
        <div className=" d-flex justify-content-end flex-wrap my-2">
          <button
            className="btn btn-primary btn-lg rounded mx-2 my-2"
            type="submit"
          >
            Guardar
          </button>
          <button
            onClick={() => Alerts.alertWarning()}
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

export default FormProducts;