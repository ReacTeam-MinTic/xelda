import React from "react";
import { useRef } from "react";
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"></script>;

const Inputs = () => {
  const form = useRef(null);

  const clicForm = (e) => {
    e.preventDefault();
    const lista = {};
    const impresion = new FormData(form.current);

    impresion.forEach((value, key) => {
      lista[key] = value;
    });

    console.log(lista);
  };

  return (
    <div>
      <form onSubmit={clicForm} ref={form}>
        <ul>
          <div className="col-4">
            <div classname="form-group">
              <label classname htmlfor>
                Email
              </label>
              <input
                name="Email"
                className="form-control"
                type="email"
                autocomplete="nope"
              />
            </div>
            <div className="form-group">
              <label htmlfor>Phone</label>
              <input
                name="Phone"
                className="form-control"
                type="number"
                min={2000}
                max={2020}
                autocomplete="nope"
              />
            </div>
            <div classname="form-group">
              <label htmlfor="f">Message</label>
              <input
                name="message"
                className="form-control"
                type="text"
                autocomplete="nope"
              />
            </div>

            <button className="btn btn-primary mt-4" type="submit">
              Guardar
            </button>
          </div>
        </ul>
      </form>
      <br />
    </div>
  );
};

export default Inputs;
