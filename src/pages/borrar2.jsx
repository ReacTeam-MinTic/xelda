import React, {useEffect, useState} from "react";
import LayoutsCard from "layouts/card";


const Vehiculos2 = () => {
  const[nombreVehiculo, setNombreVehiculo] = useState("Este es un nombre por defecto");

  useEffect(() => {
      console.log("Este efect se muestra solo con renderizar la pagina");
    }, []);

  useEffect(
    () => {
      console.log("Esto es una función que se ejecuta cada vez que cambia el valor de nombreVehículo");
      console.log("El valor de la variable es, ", nombreVehiculo);
    }, [nombreVehiculo]);

  const enviarDatosalBackend = () => {
    setNombreVehiculo("El valor nombre de la variable es, ", nombreVehiculo);
  };



  return (
    <>
      <LayoutsCard titulo="Usuarios" subtitulo="Agregar usuarios">
        <form className="needs-validation" noValidate>
          <div className="card-header">
            <h4>Estados</h4>
          </div>
          <div className="card-body">
          <div className="form-group">
              <label>Vehiculo</label>
              <input onChange={(e) => {setNombreVehiculo(e.target.value)}} value={nombreVehiculo} type="email" className="form-control" />
              <div className="valid-feedback">Good job!</div>
            </div>
            
          </div>
          
          <div className="card-footer text-right">
            <button onClick={enviarDatosalBackend} className="btn btn-primary">Guardar</button>
          </div>
        </form>
      </LayoutsCard>
    </>
  );
};

export default Vehiculos2;
