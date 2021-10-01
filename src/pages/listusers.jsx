import listUsers from "datesLists";
import { useEffect } from "react";

const ListUsers = ({lista}) => {
    
  return (
      <div className="table-responsive">
        <table id="example" className="table table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>Nombres</th>
              <th>Apellidos</th>
              <th>Estado</th>
              <th>Rol</th>
              <th>Email</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            {lista.map((listUsers) =>(
              <tr>
              <td>002</td>
              <td>{listUsers.name}</td>
              <td>{listUsers.lastName}</td>
              <td> <div class="badge badge-success">{listUsers.role}</div></td>
              <td><div class="badge badge-warning">Vendedor</div></td>
              <td>gustavo@hotmail.com</td>
              <td>
                <div class="row justify-content-md-center">
                  <a href=""><i class="fas fa-edit"></i></a>
                  <a href=""><i class="fas fa-trash-alt"></i></a>
                </div>
                </td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
     
    
  );
};

export default ListUsers;
