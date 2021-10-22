import { nanoid } from "nanoid";
import { useState, useEffect } from "react";
import iziToast from "izitoast";
import Alerts from "styles/js/alerts";
import ButtonSerarch from "components/utilsComponent/buttonSerarch";
import { editUsers, deleteUsers_ } from "utils/api";
import ReactLoading from "react-loading";
import PrivateComponent from "components/auth0/privateComponent";

const FileTableUsers = ({ user, setRunQuery }) => {
  const [edit, setEdit] = useState(false);
  const [infoNewUser, setInfoNewUser] = useState({
    name: user.given_name,
    family_name: user.family_name,
    status: user.status,
    role: user.role,
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
    );
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
              onChange={(e) =>
                setInfoNewUser({ ...infoNewUser, name: e.target.value })
              }
            />
          </td>
          <td>
            <input
              type="text"
              className="form-control"
              value={infoNewUser.family_name}
              onChange={(e) =>
                setInfoNewUser({ ...infoNewUser, family_name: e.target.value })
              }
            />
          </td>
          <td>
            <select
              value={infoNewUser.status}
              className="form-control"
              onChange={(e) =>
                setInfoNewUser({ ...infoNewUser, status: e.target.value })
              }
            >
              <option value="" disabled>
                Seleccione una opción
              </option>
              <option value="Autorizado">Autorizado</option>
              <option value="Rechazado">Rechazado</option>
              <option value="Pendiente">Pendiente</option>
            </select>
          </td>
          <td>
            <select
              value={infoNewUser.role}
              className="form-control"
              onChange={(e) =>
                setInfoNewUser({ ...infoNewUser, role: e.target.value })
              }
            >
              <option value="">Seleccione una opción</option>
              <option value="Admin">Admin</option>
              <option value="Vendedor">Vendedor</option>
              <option value="SinRol">Sin rol</option>
            </select>
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
          <td>{user.family_name}</td>
          <td>
            {user.status === "Autorizado" ? (
              <div class="badge badge-success">{user.status}</div>
            ) : user.status === "Rechazado" ? (
              <div class="badge badge-danger">{user.status} </div>
            ) : (
              <div class="badge badge-secondary">{user.status}</div>
            )}
          </td>
          <td>
            {user.role === "Admin" ? (
              <div class="badge badge-info">{user.role}</div>
            ) : user.role === "Vendedor" ? (
              <div class="badge badge-warning">{user.role}</div>
            ) : (
              <div class="badge badge-secondary">{user.role}</div>
            )}
          </td>
          <td>{user.email}</td>
        </>
      )}
      <PrivateComponent rolesList={["Admin"]}>
        <td>
          <div class="row justify-content-md-center">
            {edit ? (
              <>
                <button
                  class="btn btn-icon btn-sm"
                  onClick={() => updateUser()}
                >
                  <i class="fas fa-check"></i>
                </button>
                <button
                  class="btn btn-icon btn-sm"
                  onClick={() => setEdit(!edit)}
                >
                  <i class="fas fa-ban"></i>
                </button>
              </>
            ) : (
              <>
                <button
                  class="btn btn-icon btn-sm"
                  onClick={() => setEdit(!edit)}
                >
                  <i class="fas fa-edit"></i>
                </button>
                <button
                  class="btn btn-icon btn-sm"
                  onClick={() => alertWarning_()}
                >
                  <i class="fas fa-trash-alt"></i>
                </button>
              </>
            )}
          </div>
        </td>
      </PrivateComponent>
    </tr>
  );
};

const ListUsers = ({ loading, usersDb, setRunQuery }) => {
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
        {loading ? (
          <ReactLoading
            type="spinningBubbles"
            color="#6777ef"
            height={667}
            width={375}
          />
        ) : (
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Nombres</th>
                <th>Apellidos</th>
                <th>Estado</th>
                <th>Rol</th>
                <th>Email</th>
                <PrivateComponent rolesList={["Admin"]}>
                  <th>Opciones</th>
                </PrivateComponent>
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
        )}
      </div>
    </>
  );
};

export default ListUsers;
