import LayoutsCard from "layouts/layouts-card";
import React from "react";


const ListUsers = () => {
  return (
    <LayoutsCard titulo="Módulo de Usuarios" subtitulo="Listado de usuarios" ruta1="Inicio" ruta2="Usuarios" ruta3="Lista de usuarios" boton="Nuevo Usuario">
      <div className="table-responsive">
        <table id="example" className="table table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>Nombres</th>
              <th>Apellidos</th>
              <th>Rol</th>
              <th>Email</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>0001</td>
              <td>Gustavo Adolfo</td>
              <td>De Armas Nuñez</td>
              <td><div class="badge badge-success">Vendedor</div></td>
              <td>gustavo@hotmail.com</td>
              <td>
                <div class="row justify-content-md-center">
                  <a href=""><i class="fas fa-edit"></i></a>
                  <a href=""><i class="fas fa-trash-alt"></i></a>
                </div>
                </td>
            </tr>
            <tr>
              <td>0001</td>
              <td>Gustavo Adolfo</td>
              <td>De Armas Nuñez</td>
              <td><div class="badge badge-success">Vendedor</div></td>
              <td>gustavo@hotmail.com</td>
              <td>
                <div class="row justify-content-md-center">
                  <a href=""><i class="fas fa-edit"></i></a>
                  <a href=""><i class="fas fa-trash-alt"></i></a>
                </div>
                </td>
            </tr>
            
          </tbody>
        </table>
      </div>
    </LayoutsCard>
  );
};

export default ListUsers;
