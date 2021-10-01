import React from "react";
import Card from "components/Card";
import alertSucees from "styles/js/alerts";

const FormUsers = () => {
  return (
    <>
      <Card titulo="Módulo de Usuarios" subtitulo="Agregar usuarios"  boton="Mostrar todos" icon="fas fa-list">
        <form className="needs-validation" noValidate>
          <div className="card-header">
            <h4>JavaScript Validation</h4>
          </div>
          <div className="card-body">
            <div className="form-group">
              <label>Your Name</label>
              <input type="text" className="form-control" required />
              <div className="invalid-feedback">What's your name?</div>
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" className="form-control" required />
              <div className="invalid-feedback">Ingrese un email válido</div>
            </div>
            <div className="form-group">
              <label>Subject</label>
              <input type="email" className="form-control" />
              <div className="valid-feedback">Good job!</div>
            </div>
            <div className="form-group mb-0">
              <label>Message</label>
              <textarea className="form-control" required defaultValue={""} />
              <div className="invalid-feedback">What do you wanna say?</div>
            </div>
          </div>
          <div className="card-footer text-right">
            <button onClick={() => alertSucees()} className="btn btn-primary">Guardar</button>
          </div>
        </form>
      </Card>
    </>
  );
};

export default FormUsers;
