import React from "react";
import Alerts from "styles/js/alerts";
import { useRef, useEffect, useState } from "react";
import { postUsers } from "utils/api";
import { editUsers } from "utils/api";

const FormUsers = ({ setWiewTable }) => {
  const form = useRef(null);
  const submitForm = async (e) => {
    e.preventDefault();
    const fd = new FormData(form.current);

    const newUser = {};
    fd.forEach((value, key) => {
      newUser[key] = value;
    });
    await postUsers(
      {
        name: newUser.name,
        lastname: newUser.lastname,
        /* state: newUser.state, */
        rol: newUser.rol,
        email: newUser.email,
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
            <label htmlFor="name">Nombres</label>
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
            <label htmlFor="lastname">Apellidos</label>
            <input
              name="lastname"
              type="text"
              className="form-control "
              required
              autoComplete="off"
              placeholder="Perez Perez"
            />
            <div className="invalid-feedback">
              El campo no puede quedar vacío.
            </div>
          </div>
          {/* <div className="form-group">
            <label htmlFor="state">Estado</label>
            <select
              className="form-control select2"
              name="state"
              defaultValue={0}
            >
              <option disabled value={0}>
                Seleccione un opción
              </option>
              <option>Activo</option>
              <option>Inactivo</option>
            </select>
            <div className="invalid-feedback">
              El campo no puede quedar vacío.
            </div>
          </div> */}
          <div className="form-group">
            <label htmlFor="role">Rol</label>
            <select
              className="form-control select2"
              name="role"
              defaultValue={0}
            >
              <option disabled value={0}>
                Seleccione un opción
              </option>
              <option>Inactivo</option>
              <option>Vendedor</option>
              <option>Admin</option>
            </select>
            <div className="invalid-feedback">
              El campo no puede quedar vacío.
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              name="email"
              type="email"
              className="form-control"
              required
              autoComplete="off"
              placeholder="abc@gmail.com"
            />
            <div className="invalid-feedback">
              Por favor, ingrese un email válido.
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

/* const RolesUsuarios = ({ user }) => {
  const [rol, setRol] = useState(user.rol)

  useEffect(() => {
    const editarUsuario = async () => {
      await editUsers(
        user._id,
        { rol },
        (res) => {
          console.log(res)
        },
        (err) => {
          console.error(err)
        }
      )
    }
    if (user.rol !== rol) {
      editarUsuario()
    }
  }, [rol, user])

  return (
    <select
      className="form-control select2"
      name="role"
      defaultValue={0}
      value={rol}
      onChange={(e) => setRol(e.target.value)}
    >
      <option disabled value={0}>
        Seleccione un opción
      </option>
      <option>Inactivo</option>
      <option>Vendedor</option>
      <option>Admin</option>
    </select>
  )
} */

export default FormUsers;
