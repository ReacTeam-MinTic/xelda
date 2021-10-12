import { nanoid } from "nanoid";
import { useRef, useState, useEffect } from "react";
import axios from "axios";
import iziToast from "izitoast";
import Alerts from "styles/js/alerts";
import ButtonSerarch from "components/utilsComponent/buttonSerarch";


const FileTableUsers = ({ user, setRunQuery}) => {
  const [edit, setEdit] = useState(false);
  const [infoNewUser, setInfoNewUser] = useState({
    name:user.name,
    lastname:user.lastname,
    state:user.state,
    role:user.role,
    email:user.email,
  });

  const updateUser = async () => {
    console.log(infoNewUser);
    setEdit(false);
    const options = {
      method: 'PATCH',
      url: 'http://localhost:5000/editar/usuarios',
      headers: {'Content-Type': 'application/json'},
      data: {...infoNewUser, id: user._id}
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
  
  const deleteUser = async () => {
    const options = {
      method: 'DELETE',
      url: 'http://localhost:5000/eliminar/usuarios',
      headers: {'Content-Type': 'application/json'},
      data: {_id: user._id}
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
            
            deleteUser();
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
              value={infoNewUser.name}
              onChange={(e)=> setInfoNewUser({...infoNewUser, name: e.target.value})}
            />
          </td>
          <td>
            <input
              type="text"
              className="form-control"
              value={infoNewUser.lastname}
              onChange={(e)=> setInfoNewUser({...infoNewUser, lastname: e.target.value})}
            />
          </td>
          <td>
            <input
              type="text"
              className="form-control"
              value={infoNewUser.state}
              onChange={(e)=> setInfoNewUser({...infoNewUser, state: e.target.value})}
            />
          </td>
          <td>
            <input
              type="text"
              className="form-control"
              value={infoNewUser.role}
              onChange={(e)=> setInfoNewUser({...infoNewUser, role: e.target.value})}
            />
          </td>
          <td>
            <input
              type="text"
              className="form-control"
              value={infoNewUser.email}
              onChange={(e)=> setInfoNewUser({...infoNewUser, email: e.target.value})}
            />
          </td>
          
        </>
      ) : (
        <>
          <td>{user.name}</td>
          <td>{user.lastname}</td>
          <td>
            {" "}
            <div class="badge badge-success">{user.state}</div>
          </td>
          <td>
            <div class="badge badge-warning">{user.role}</div>
          </td>
          <td>{user.email}</td>
        </>
      )}

      <td>
        <div class="row justify-content-md-center">
          {edit ? (
            <>
            <a onClick={() => updateUser()}>
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

const ListUsers = ({ usersDb, setRunQuery}) => {
  const [busqueda, setBusqueda] =useState('');
  const[usersFitred, setUsersFitred] = useState(usersDb);

  useEffect(() => {
   setUsersFitred(
     usersDb.filter((elemento)=>{
       return JSON.stringify(elemento).toLowerCase().includes(busqueda.toLowerCase());
     })
   );
  }, [busqueda, usersDb])
  

  return (
    <>
    
      <ButtonSerarch busqueda={busqueda} setBusqueda={setBusqueda}/>
      

      <div className="table-responsive">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Nombres</th>
            <th>Apellidos</th>
            <th>Estado</th>
            <th>Rol</th>
            <th>Email</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {usersFitred.map((user) => {
            return <FileTableUsers key={nanoid()} user={user} setRunQuery={setRunQuery}/>;
          })}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default ListUsers;
