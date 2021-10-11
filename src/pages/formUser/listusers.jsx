
import Alerts from "styles/js/alerts";
import { nanoid } from "nanoid";


const ListUsers = ({usuarios}) => {
  return (
      <div className="table-responsive">
        <table id="example" className="table table-striped">
          <thead>
            <tr>
              <th>Nombres</th>
              <th>Apellidos</th>
              <th>Estado</th>
              <th>Rol</th>
              <th>Email</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
          {usuarios.map((user) =>(
              <tr>
              <td>002</td>
              <td>{user.name}</td>
              <td>{user.lastName}</td>
              <td> <div class="badge badge-success">{user.role}</div></td>
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
