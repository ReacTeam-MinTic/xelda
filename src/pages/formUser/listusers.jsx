
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
            <tr>
              <td>hh</td>
              <td>gg</td>
              <td>
                <div class="badge badge-success">gg</div>
              </td>
              <td>
                <div class="badge badge-warning">gg</div>
              </td>
              <td>gg</td>
              <td>
                <div class="row justify-content-md-center">
                  <a onClick="{}">
                    <i class="fas fa-edit"></i>
                  </a>
                  <a onClick={() => Alerts.alertWarning()}>
                    <i class="fas fa-trash-alt"></i>
                  </a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
   
  );
};

export default ListUsers;
