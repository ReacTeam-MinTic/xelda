import { nanoid } from "nanoid";
import { useState, useEffect } from "react";
import axios from "axios";
import iziToast from "izitoast";
import Alerts from "styles/js/alerts";
import ButtonSerarch from "components/utilsComponent/buttonSerarch";

const getToken = () => {
  return `Bearer ${localStorage.getItem('token')}`
}

const FileTableProducts = ({ product, setRunQuery}) => {
  const [edit, setEdit] = useState(false);
  const [infoNewProduct, setInfoNewProduct] = useState({
    cod:product.cod,
    name:product.name,
    description:product.description,
    value_:product.value_,
    status:product.status
  });

  const updateProduct = async () => {
    console.log(infoNewProduct);
    setEdit(false);
    const options = {
      method: 'PATCH',
      url: `http://localhost:5000/products/${product._id}`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: getToken()
      },
      data: {...infoNewProduct, id: product._id}
    };
    
    await axios.request(options).then(function (response) {
      console.log(response.data);
      Alerts.alertSucees();
      setRunQuery(true);
      setEdit(false);
    }).catch(function (error) {
      Alerts.alertError();
      console.error("_____dd",error);
    });
  };
  
  const deleteProduct = async () => {
    const options = {
      method: 'DELETE',
      url: `http://localhost:5000/products/${product._id}`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: getToken()
      },
      data: {_id: product._id}
    };
    
    await axios.request(options).then(function (response) {
      console.log(response.data);
      const mensaje = "Registro eliminado con éxito"
      Alerts.alertSucees(mensaje);
      setRunQuery(true);
    }).catch(function (error) {
      console.error(error);
      Alerts.alertError();
    }); 
    
  }

  const alertWarning_ = () => {
    iziToast.show({
      title: "¡Cuidado!",
      message: "¿Está a punto de elimanar el siguiente registro: ",
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
              type="text"
              className="form-control"
              value={infoNewProduct.status}
              onChange={(e)=> setInfoNewProduct({...infoNewProduct, status: e.target.value})}
            />
          </td>
          
        </>
      ) : (
        <>
          <td>{product.cod}</td>
          <td>{product.name}</td>
          <td>{product.description}</td>
          <td>${product.value_}</td>
          <td>
            {product.status.toLowerCase() === "disponible" ? <div class="badge badge-success">{product.status}</div> : <div class="badge badge-danger">{product.status}</div>}
            
          </td>
   
          
        </>
      )}

      <td>
        <div class="row justify-content-md-center">
          {edit ? (
            <>
            <a onClick={() => updateProduct()}>
              <i class="fas fa-check"></i>
            </a>
            <a onClick={() => setEdit(!edit)}>
           <i class="fas fa-ban"></i>
         </a>
            </>
          ) : (
            <>
            <a onClick={() => setEdit(!edit)}>
              <i class="fas fa-edit"></i>
            </a>
            <a onClick={()=> alertWarning_()}>
              <i class="fas fa-trash-alt"></i>
            </a> 
         </>
          )}
        </div> 
      </td>
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
            <th>Estado</th>
            <th>Opciones</th>
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
