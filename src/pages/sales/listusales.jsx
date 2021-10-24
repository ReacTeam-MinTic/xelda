import { nanoid } from "nanoid";
import { useState, useEffect } from "react";
import iziToast from "izitoast";
import Alerts from "styles/js/alerts";
import ButtonSerarch from "components/utilsComponent/buttonSerarch";
import { editSales, deleteSales_ } from "utils/api";
import PrivateComponent from "components/auth0/privateComponent";

const FileTableSales = ({ sale, setRunQuery }) => {

  console.log("sale..sale:", sale)
  //console.log("sale..products:", sale.products)
  //console.log("sale..customer:", sale.customer)
  const [edit, setEdit] = useState(false);
  const [infoNewSale, setInfoNewSale] = useState({
    cod: sale.cod,
    date: sale.date,
    id_customer: sale.id_customer,
    customer: sale.customer,
    cost: sale.cost,
    amount: sale.amount,
    total_value: sale.total_value,
  });

  const updateSale = async () => {
    await editSales(
      sale._id,
      infoNewSale,
      (response) => {
        console.log(response.data);
        Alerts.alertSucees();
        setRunQuery(true);
        setEdit(false);
      },
      (error) => {
        Alerts.alertError();
        console.error("_____error", error);
      }
    );
  };

  const deleteSale = async () => {
    await deleteSales_(
      sale._id,
      (response) => {
        console.log(response.data);
        const mensaje = "Registro eliminado con éxito";
        Alerts.alertSucees(mensaje);
        setRunQuery(true);
      },
      (error) => {
        Alerts.alertError();
        console.error("_____error", error);
      }
    )
  };

  const alertWarning_ = () => {
    iziToast.show({
      title: "¡Cuidado!",
      message: "¿Está Link punto de elimanar el siguiente registro: ",
      color: "red",
      position: "topRight",
      icon: "far fa-check-circle",
      timeout: 0,
      buttons: [
        [
          "<button>OK</button>",
          function (instance, toast) {
            deleteSale();
            instance.hide(
              {
                transitionOut: "fadeOutUp",
                onClosing: function (instance, toast, closedBy) {
                  console.info("closedBy: " + closedBy); // The return will be: 'closedBy: buttonName'
                },
              },
              toast,
              "buttonName"
            );
          },
          true,
        ], // true to focus
        [
          "<button>Cancelar</button>",
          function (instance, toast) {
            instance.hide(
              {
                transitionOut: "fadeOutUp",
                onClosing: function (instance, toast, closedBy) {
                  console.info("closedBy: " + closedBy); // The return will be: 'closedBy: buttonName'
                },
              },
              toast,
              "buttonName"
            );
          },
        ],
      ],
    });
  };

  return (
    <tr>
      {edit ? (
        <>
          <td>
            <input
              type="text"
              className="form-control"
              value={infoNewSale.cod}
              onChange={(e) =>
                setInfoNewSale({ ...infoNewSale, cod: e.target.value })
              }
            />
          </td>
          <td>
            <input
              type="text"
              className="form-control"
              value={infoNewSale.date}
              onChange={(e) =>
                setInfoNewSale({ ...infoNewSale, date: e.target.value })
              }
            />
          </td>
          <td>
            <input
              type="text"
              className="form-control"
              value={infoNewSale.id_customer}
              onChange={(e) =>
                setInfoNewSale({ ...infoNewSale, id_customer: e.target.value })
              }
            />
          </td>
          <td>
            <input
              type="text"
              className="form-control"
              value={infoNewSale.customer}
              onChange={(e) =>
                setInfoNewSale({ ...infoNewSale, customer: e.target.value })
              }
            />
          </td>
          <td>
            <input
              type="text"
              className="form-control"
              value={infoNewSale.cost}
              onChange={(e) =>
                setInfoNewSale({ ...infoNewSale, cost: e.target.value })
              }
            />
          </td>
          <td>
            <input
              type="text"
              className="form-control"
              value={infoNewSale.amount}
              onChange={(e) =>
                setInfoNewSale({ ...infoNewSale, amount: e.target.value })
              }
            />
          </td>
          <td>
            <input
              className="form-control-plaintext"
              type="text"
              placeholder="Readonly" 
              readOnly={true}
              readonly
            />
          </td>
        </>
      ) : (
        <>
          <td>{sale.cod}</td>
          <td>{sale.date}</td>
          <td>{sale.id_customer}</td>
          <td>{sale.customer}</td>
          <td>{sale.products.map((e)=>{return(<dl><dt>{e.name}</dt></dl>)})}</td>
          <td>{sale.products.map((e)=>{return(<dl><dd>{e.quantity + " und." }</dd></dl>)})}</td>
          <td>${sale.total_value}</td>
        </>
      )}

      <td>
        <div class="row justify-content-md-center">
          {edit ? (
            <>
              <button class="btn btn-icon btn-sm" onClick={() => updateSale()}>
                <i class="fas fa-check"></i>
              </button>
              <button class="btn btn-icon btn-sm" onClick={() => setEdit(!edit)}>
                <i class="fas fa-ban"></i>
              </button>
            </>
          ) : (
            <>
              <button  class="btn btn-icon btn-sm"onClick={() => setEdit(!edit)}>
                <i class="fas fa-edit"></i>
              </button>
              <PrivateComponent rolesList={["Admin"]}>
              <button class="btn btn-icon btn-sm" onClick={() => alertWarning_()}>
                <i class="fas fa-trash-alt"></i>
              </button>
              </PrivateComponent>
            </>
          )}
        </div>
      </td>
    </tr>
  );
};

const ListSales = ({ salesDb, setRunQuery }) => {
  const [busqueda, setBusqueda] = useState("");
  const [salesFiltered, setsalesFiltered] = useState(salesDb);
  console.log("salesFiltered: ", salesFiltered)

  useEffect(() => {
    setsalesFiltered(
      salesDb.filter((elemento) => {
        return JSON.stringify(elemento)
          .toLowerCase()
          .includes(busqueda.toLowerCase());
      })
    );
  }, [busqueda, salesDb]);

  return (
    <>
      <ButtonSerarch busqueda={busqueda} setBusqueda={setBusqueda} />

      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Cod</th>
              <th>Fecha</th>
              <th>Id Cliente</th>
              <th>Cliente</th>
              <th>Producto</th>
              <th>Unt</th>
              <th>Total</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            {salesFiltered.map((sale) => {
              return (
                <FileTableSales
                  key={nanoid()}
                  sale={sale}
                  setRunQuery={setRunQuery}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ListSales;
