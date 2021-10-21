import React from "react";
import Alerts from "styles/js/alerts";
import { useRef, useState, useEffect } from "react";
import { postSales } from "utils/api";
import { nanoid } from "nanoid";

const FormSales = ({
  setWiewTable,
  seller,
  setSalesDb, 
  salesDb,
  products,
  setProducts,
  setproductsRow,
  productsRow,
}) => {
  const form = useRef(null);

  const submitForm = async (e) => {
    e.preventDefault();
    const fd = new FormData(form.current);
    const newSale = {};
    fd.forEach((value, key) => {
      newSale[key] = value;
    });

    const listProducts = Object.keys(newSale)
      .map((k) => {
        if (k.includes("products")) {
          return productsRow.filter((v) => v._id === newSale[k])[0];
        }
        return null;
      })
      .filter((v) => v);

    Object.keys(newSale)
      .forEach((k) => {
        if (k.includes("cantidad")) {
          const indice = parseInt(k.split('_')[1]);
          listProducts[indice]['cantidad']=newSale[k];
        }
       
      });

    const saleInputs = {
      cod: newSale.cod,
      date: newSale.date,
      id_customer: newSale.id_customer,
      customer: newSale.customer,
      cost: newSale.cost,
      amount: newSale.amount,
      seller: seller.filter((s) => s._id === newSale.seller)[0],
      products: listProducts,
      total_value: newSale.cost * newSale.amount,
    };

    await postSales(
      saleInputs,
      (response) => {
        console.log("data enviada", response.data);
        const bodyAlert = "¡Guardado!";
        const mensaje = "Operación exitosa";
        Alerts.alertSucees(mensaje, bodyAlert);
      },
      (error) => {
        console.error("Este es el error", error);
        Alerts.alertError();
      },
      setWiewTable(true)
    );
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
           <div className="card card-primary">
            <div className="card-header">
              <h4>Añadir productos</h4>
              <div className="card-header-action"></div>
            </div>
            <div className="card-body">
              <div className="form-group">
                <Productstable
                  products={products}
                  setProducts={setProducts}
                  setproductsRow={setproductsRow}
                />
                <div className="invalid-feedback">
                  El campo no puede quedar vacío.
                </div>
              </div>
            </div>
          </div>
          
{/*           
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
          */}
         
         
          <div className="form-group">
            <label htmlFor="seller">Vendedor</label>
            <select
              className="form-control select2"
              name="seller"
              defaultValue=""
              required
            >
              <option disabled value="">
                Seleccione un opción
              </option>
              {seller.map((el) => {
                return (
                  <option
                    key={nanoid()}
                    value={el._id}
                  >{`${el.name} ${el.lastname}`}</option>
                );
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

const Productstable = ({ products, setProducts, setproductsRow }) => {
  const [productsForAdd, setProductsForAdd] = useState({});
  const [rowTable, setRowTable] = useState([]);
  const [subTotalRow, setSubTotalRow] = useState([]);
  //console.log("aSDASD", subTotalRow);

  useEffect(() => {
    setproductsRow(rowTable);
  }, [rowTable, setproductsRow]);

  const addNewProductTable = () => {
    setRowTable([...rowTable, productsForAdd]);
    setProducts(products.filter((v) => v._id !== productsForAdd._id));
    setProductsForAdd({});
  };

  const deleteRowTable = (productRowDelete) => {
    setRowTable(rowTable.filter((x) => x._id !== productRowDelete._id));
    setProducts([...products, productRowDelete]);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-11">
          <select
            className="form-control select2"
            value={productsForAdd._id ?? ""}
            onChange={(e) =>
              setProductsForAdd(
                products.filter((x) => x._id === e.target.value)[0]
              )
            }
            // name={name_select}
          >
            <option disabled value="">
              Seleccione un opción
            </option>
            {products.map((em) => {
              return (
                <option
                  key={nanoid()}
                  value={em._id}
                >{`${em.name} ${em.value_}`}</option>
              );
            })}
          </select>
        </div>
        <div className="col-1">
          <button
            type="button"
            onClick={() => addNewProductTable()}
            className="btn btn-primary mt-1"
          >
            <i className="fas fa-plus"></i>
          </button>
        </div>
      </div>

      <table className="table table-bordered mt-3 ">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">PRODUCTO</th>
            <th scope="col">VALOR</th>
            <th scope="col">CANTIDAD</th>
            <th scope="col">SUBTOTAL</th>
            <th scope="col">ELIMINAR</th>
            <th className="hidden">input</th>
          </tr>
        </thead>
        <tbody>
          {rowTable.map((el, index) => {
            return (
              <tr key={nanoid()}>
                <th scope="row">{index + 1}</th>
                <td>{el.name}</td>
                <td>{el.value_}</td>
                <td>
                  <label htmlFor={`value_${index}` }>
                    <input type="number" name={`cantidad_${index}`}  required  
              />
              {/* onChange={(e) =>
              setSubTotalRow([...subTotalRow, e.target.value])}  */}
                  </label>
                </td>
                <td>{subTotalRow*el.value_}</td>
                <td>
                  <div className="d-flex justify-content-center">
                    <button
                      onClick={() => deleteRowTable(el)}
                      className="btn btn-warning mt-1 "
                    >
                      <i className="fas fa-minus-circle"></i>
                    </button>
                  </div>
                </td>
                <input
                  hidden
                  defaultValue={el._id}
                  name={`products_${index}`}
                />
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default FormSales;
