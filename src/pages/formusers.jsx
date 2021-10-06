import React from "react";
import Card from "components/Card";
import Alerts from "styles/js/alerts";



const enviarDatosBackend = (Alerts) =>{
  Alerts.alertWarning();
  //Aquí se ejecuta el códiugo que va al bacjkend
}

const FormUsers = () => {
  
  return (
    <>
      <Card
        titulo="Módulo de Usuarios"
        subtitulo="Agregar usuarios"
        ruta1="Inicio"
        ruta2="Usuarios"
        ruta3="Formulario de usuarios"
        boton="Mostrar todos"
        icon="fas fa-list"
        rutaheadercard="/listusers"
      >
        <form className="needs-validation" noValidate >
          <div className="card-header">
            <h4>Formulario de registro</h4>
          </div>
          <div className="card-body">
            <div class="card-body">
              <div className="form-group">
                <label>Nombres</label>
                <input  autocomplete="nope"  name="name" type="text" className="form-control " required  autoComplete="off" placeholder="Camilo Camilo"/>
                <div className="invalid-feedback">
                  El campo no puede quedar vacío.
                </div>
              </div>
              <div className="form-group">
                <label>Apellidos</label>
                <input name="lastname" type="text" className="form-control " required autoComplete="off" placeholder="Perez Perez" />
                <div className="invalid-feedback">
                  El campo no puede quedar vacío.
                </div>
              </div>
              <div className="form-group">
                <label>Email</label>
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
              <div class="form-group">
                <label>Rol</label>
                <select class="form-control select2">
                  <option>Vendedor</option>
                  <option>Administrador</option>
                </select>
              </div>
            </div>
          </div>
          <div className=" d-flex justify-content-end flex-wrap my-2">
            <button
              onClick={() => {enviarDatosBackend(Alerts)}}
              className="btn btn-primary btn-lg rounded mx-2 my-2"
              type="button"
            >
              Guardar
            </button>
            <button
              onClick={Alerts[1]}
              className="btn btn-danger btn-lg  rounded mx-2 my-2"
              type="reset"
            >
              Eliminar
            </button>
          </div>
        </form>
      </Card>
    </>
  );
};

export default FormUsers;
