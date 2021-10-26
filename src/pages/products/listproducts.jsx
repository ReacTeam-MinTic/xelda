import { nanoid } from "nanoid";
import { useState, useEffect } from "react";
import iziToast from "izitoast";
import Alerts from "styles/js/alerts";
import ButtonSerarch from "components/utilsComponent/buttonSerarch";
import { editProducts, deleteProducts_ } from "utils/api";
import PrivateComponent from "components/auth0/privateComponent";


const FileTableProducts = ({ product, setRunQuery}) => {
  
  const [edit, setEdit] = useState(false);
  const [infoNewProduct, setInfoNewProduct] = useState({
    cod:product.cod,
    name:product.name,
    description:product.description,
    value_:product.value_,
    inventory:product.inventory,
    status:product.status
  });
  const[estado, setEstado] = useState("")
  
  useEffect(() => {
    if(parseInt(infoNewProduct.inventory ) === 0){
      setEstado("No disponible");
    }
    else if(parseInt(infoNewProduct.inventory ) > 0){
      setEstado("Disponible")
    }else{
      setEstado('Vacio');
    }
  }, [infoNewProduct.inventory])


  const updateProduct = async () => {
    await editProducts(
      product._id,
      infoNewProduct,
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
  
  const deleteProduct = async () => {
    await deleteProducts_(
      product._id,
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
    
  }

  const alertWarning_ = () => {
    iziToast.show({
      title: "¡Cuidado!",
      message: "¿Está Link punto de elimanar el siguiente registro: ",
      color: "red",
      position: 'topRight',
      icon: "far fa-check-circle",
      timeout: 0,
      buttons: [
        [
          "<button>OK</button>",
          function (instance, toast) {
            
            deleteProduct();
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
              type="number"
              className="form-control"
              value={infoNewProduct.cod}
              onChange={(e)=> setInfoNewProduct({...infoNewProduct, cod: e.target.value})}
            />
          </td>
          <td>
            <input
              type="text"
              className="form-control"
              value={infoNewProduct.name}
              onChange={(e)=> setInfoNewProduct({...infoNewProduct, name: e.target.value})}
            />
          </td>
          <td>
            <input
              type="text"
              className="form-control"
              value={infoNewProduct.description}
              onChange={(e)=> setInfoNewProduct({...infoNewProduct, description: e.target.value})}
            />
          </td>
          <td>
            <input
              type="number"
              className="form-control"
              value={infoNewProduct.value_}
              onChange={(e)=> setInfoNewProduct({...infoNewProduct, value_: e.target.value})}
            />
          </td>
          <td>
            <input
              type="number"
              className="form-control"
              value={infoNewProduct.inventory}
              onChange={(e)=> setInfoNewProduct({...infoNewProduct, inventory: e.target.value})}
            />
          </td>
          <td>
            <input
              type="text"
              className="form-control"
              value={estado}
              //onChange={(e)=> setInfoNewProduct({...infoNewProduct, status: e.target.value} )}
            />
          </td>
          
        </>
      ) : (
        <>
          <td>{product.cod}</td>
          <td>{product.name}</td>
          <td>{product.description}</td>
          <td>${product.value_}</td>
          <td>{product.inventory}</td>
          <td>
            {product.status.toLowerCase() === "disponible" ? <div class="badge badge-success">{product.status}</div> : <div class="badge badge-danger">{product.status}</div>}
            
          </td>
   
          
        </>
      )}
      <PrivateComponent rolesList={["Admin"]}>
      <td>
        <div class="row justify-content-md-center">
          {edit ? (
            <>
            <button class="btn btn-icon btn-sm" onClick={() => updateProduct()}>
              <i class="fas fa-check"></i>
            </button >
            <button class="btn btn-icon btn-sm"  onClick={() => setEdit(!edit)}>
           <i class="fas fa-ban"></i>
         </button >
            </>
          ) : (
            <>
            <button class="btn btn-icon btn-sm"  onClick={() => setEdit(!edit)}>
              <i class="fas fa-edit"></i>
            </button >
            <button class="btn btn-icon btn-sm"  onClick={()=> alertWarning_()}>
              <i class="fas fa-trash-alt"></i>
            </button > 
         </>
          )}
        </div> 
      </td>
      </PrivateComponent>
    </tr>
  );
};

const ListProducts = ({ productsDb, setRunQuery}) => {
  const [busqueda, setBusqueda] =useState('');
  const[productsFiltered, setproductsFiltered] = useState(productsDb);

  useEffect(() => {
   setproductsFiltered(
     productsDb.filter((elemento)=>{
       return JSON.stringify(elemento).toLowerCase().includes(busqueda.toLowerCase());
     })
   );
  }, [busqueda, productsDb])
  

  return (
    <>
    
      <ButtonSerarch busqueda={busqueda} setBusqueda={setBusqueda}/>
      

      <div className="table-responsive">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Code</th>
            <th>Name</th>
            <th>Descropción</th>
            <th>Valor</th>
            <th>Inventario</th>
            <th>Estado</th>
            <PrivateComponent rolesList={["Admin"]}>
            <th>Opciones</th>
            </PrivateComponent>
          </tr>
        </thead>
        <tbody>
          {productsFiltered.map((product) => {
            return <FileTableProducts key={nanoid()} product={product} setRunQuery={setRunQuery}/>;
          })}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default ListProducts;
