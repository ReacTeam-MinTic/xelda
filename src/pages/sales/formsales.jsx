import React from "react";
import Alerts from "styles/js/alerts";
import { useRef } from "react";
import { postSales } from "utils/api";

const FormSales = ({ setWiewTable, seller, products }) => {
  const form = useRef(null);
  const submitForm = async (e) => {
    e.preventDefault();
    const fd = new FormData(form.current);
    const newSale = {};
    fd.forEach((value, key) => {
      newSale[key] = value;
    });
    await postSales(
      {
        cod: newSale.cod,
        date: newSale.date,
        id_customer: newSale.id_customer,
        customer: newSale.customer,
        cost: newSale.cost,
        amount: newSale.amount,
        total_value: newSale.cost * newSale.amount,
      },
      (response) => {
        console.log("data enviada", response.data);
        const bodyAlert = "¡Guardado!";
        const mensaje = "Operación exitosa";
        Alerts.alertSucees(mensaje, bodyAlert);
      },
      (error) => {
        console.error("Este es el error", error);
        Alerts.alertError();
      }
    );
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
            <label htmlFor="cod">COD</label>
            <input
              autoComplete="nope"
              name="cod"
              type="number"
              className="form-control "
              required
              autoComplete="off"
              placeholder="0001"
            />
            <div className="invalid-feedback">
              El campo no puede quedar vacío.
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="date">FECHA</label>
            <input
              autoComplete="nope"
              name="date"
              type="date"
              className="form-control "
              required
              autoComplete="off"
              placeholder="dd/mm/aaaa"
            />
            <div className="invalid-feedback">
              El campo no puede quedar vacío.
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="id_customer">ID CLIENTE</label>
            <input
              autoComplete="nope"
              name="id_customer"
              type="number"
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
            <label htmlFor="customer">CLIENTE</label>
            <input
              autoComplete="nope"
              name="customer"
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
            <label htmlFor="cost">PRECIO</label>
            <input
              autoComplete="nope"
              name="cost"
              type="number"
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
            <label htmlFor="amount">CANTIDAD</label>
            <input
              autoComplete="nope"
              name="amount"
              type="number"
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
            <label htmlFor="saller">Vendedor</label>
            <select
              className="form-control select2"
              name="saller"
              defaultValue={0}
            >
              <option disabled value={0}>
                Seleccione un opción
              </option>
              {seller.map((el)=>{
                return <option value={el._id}>{`${el.name} ${el.lastname}`}</option>;
              })}
              
            </select>
            <div className="invalid-feedback">
              El campo no puede quedar vacío.
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="products">Productos</label>
            <select
              className="form-control select2"
              name="products"
              defaultValue={0}
            >
              <option disabled value={0}>
                Seleccione un opción
              </option>
              {products.map((em)=>{
                return <option value={em._id}>{`${em.name} ${em.value_}`}</option>;
              })}
              
            </select>
            <div className="invalid-feedback">
              El campo no puede quedar vacío.
            </div>
          </div>
         
          {/* <div className="form-group">
            <label htmlFor="total_value">TOTAL</label>
            <input
              autoComplete="nope"
              name="total_value"
              type="number"
              className="form-control"
              autoComplete="off"
              placeholder="0"
              value={}
            />
            <div className="invalid-feedback">
              El campo no puede quedar vacío.
            </div>
          </div>
           */}
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

export default FormSales;
