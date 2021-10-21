import { nanoid } from "nanoid";
import { useState, useEffect } from "react";
import iziToast from "izitoast";
import Alerts from "styles/js/alerts";
import ButtonSerarch from "components/utilsComponent/buttonSerarch";
import { editUsers, deleteUsers_ } from "utils/api";
import PrivateComponent from "components/PrivateComponent";

const FileTableUsers = ({ user, setRunQuery }) => {
  const [edit, setEdit] = useState(false);
  const [infoNewUser, setInfoNewUser] = useState({
    name: user.name,
    lastname: user.lastname,
    /* state: user.state, */
    rol: user.rol,
    email: user.email,
  });

  const updateUser = async () => {
    await editUsers(
      user._id,
      infoNewUser,
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

  const deleteUser = async () => {

    await deleteUsers_(
      user._id,
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
      message: "¿Está a punto de elimanar el siguiente registro: ",
      color: "red",
      position: "topRight",
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
    <PrivateComponent roleList={['admin', 'vendedor']}>
      <tr>
        {edit ? (
          <>
            <td>
              <input
                type="text"
                className="form-control"
                value={infoNewUser.name}
                onChange={(e) =>
                  setInfoNewUser({ ...infoNewUser, name: e.target.value })
                }
              />
            </td>
            <td>
              <input
                type="text"
                className="form-control"
                value={infoNewUser.lastname}
                onChange={(e) =>
                  setInfoNewUser({ ...infoNewUser, lastname: e.target.value })
                }
              />
            </td>
              {/* <td>
              <input
                type="text"
                adminName="form-control"
                value={infoNewUser.state}
                onChange={(e) =>
                  setInfoNewUser({ ...infoNewUser, state: e.target.value })
                }
              />
            </td> */}
            <td>
              <input
                type="text"
                className="form-control"
                value={infoNewUser.rol}
                onChange={(e) =>
                  setInfoNewUser({ ...infoNewUser, rol: e.target.value })
                }
              />
            </td>
            <td>
              <input
                type="text"
                className="form-control"
                value={infoNewUser.email}
                onChange={(e) =>
                  setInfoNewUser({ ...infoNewUser, email: e.target.value })
                }
              />
            </td>
          </>
        ) : (
          <>
            <td>{user.name}</td>
            <td>{user.lastname}</td>
            {/* <td>
              {user.state === "activo" ? (
                <div className="badge badge-success">{user.state}</div>
              ) : (
                <div className="badge badge-danger">{user.state}</div>
              )}
            </td> */}
            <td>
              {user.rol === "admin" ? (
                <div className="badge badge-info">{user.rol}</div>
              ) : (
                <div className="badge badge-warning">{user.rol}</div>
              )}
            </td>
            <td>{user.email}</td>
          </>
        )}

        <td>
          <div className="row justify-content-md-center">
            {edit ? (
              <>
                <a onClick={() => updateUser()}>
                  <i className="fas fa-check"></i>
                </a>
                <a onClick={() => setEdit(!edit)}>
                  <i className="fas fa-ban"></i>
                </a>
              </>
            ) : (
              <>
                <a onClick={() => setEdit(!edit)}>
                  <i className="fas fa-edit"></i>
                </a>
                <a onClick={() => alertWarning_()}>
                  <i className="fas fa-trash-alt"></i>
                </a>
              </>
            )}
          </div>
        </td>
      </tr>
    </PrivateComponent>
  );
};

const ListUsers = ({ usersDb, setRunQuery }) => {
  const [busqueda, setBusqueda] = useState("");
  const [usersFiltered, setusersFiltered] = useState(usersDb);

  useEffect(() => {
    setusersFiltered(
      usersDb.filter((elemento) => {
        return JSON.stringify(elemento)
          .toLowerCase()
          .includes(busqueda.toLowerCase());
      })
    );
  }, [busqueda, usersDb]);

  return (
    <>
      <ButtonSerarch busqueda={busqueda} setBusqueda={setBusqueda} />

      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Nombres</th>
              <th>Apellidos</th>
              {/* <th>Estado</th> */}
              <th>Rol</th>
              <th>Email</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            {usersFiltered.map((user) => {
              return (
                <FileTableUsers
                  key={nanoid()}
                  user={user}
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

export default ListUsers;
