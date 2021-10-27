import { useUser } from "context/userContext";
import React from "react";

const PrivateRoute = ({ rolesList, children }) => {
  const { userData } = useUser();
  if (rolesList.includes(userData.role)) {
    return children;
  }
  return (
    <section className="section">
      <div className="section-body">
        <div className="card">
          <div className="card-header">
            <h3 style={{color: "black"}}>¡ATENCIÓN!</h3>
          </div>
          <div className="card-body">
            <h1>Por favor espere que el administrador del sistema le asigne un rol para poder ingresar a los módulos.</h1>
            <h3>Agredecemos su paciencia</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivateRoute;