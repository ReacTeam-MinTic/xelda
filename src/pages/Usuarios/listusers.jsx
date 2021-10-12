import Card from "components/Card";
import Alerts from "styles/js/alerts";

const ListUsers = () => {
  return (
    <Card
      titulo="Módulo de Usuarios"
      subtitulo="Listado de usuarios"
      ruta1="Inicio"
      ruta2="Usuarios"
      ruta3="Lista de usuarios"
      boton="Nuevo Usuario"
      icon="far fa-user"
      rutaheadercard="/formusers"
    >
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
            <tr>
              <td>0001</td>
              <td>Gustavo Adolfo</td>
              <td>De Armas Nuñez</td>
              <td>
                <div className="badge badge-success">Activo</div>
              </td>
              <td>
                <div className="badge badge-warning">Vendedor</div>
              </td>
              <td>gustavo@hotmail.com</td>
              <td>
                <div className="row justify-content-md-center justify-content-around">
                  <i className="fas fa-edit"></i>
                  <i onClick={Alerts[1]} className="fas fa-trash-alt"></i>
                </div>
              </td>
            </tr>
            <tr>
              <td>0001</td>
              <td>Gustavo Adolfo</td>
              <td>De Armas Nuñez</td>
              <td>
                <div className="badge badge-danger">Inactivo</div>
              </td>
              <td>
                <div className="badge badge-primary">Admin</div>
              </td>
              <td>gustavo@hotmail.com</td>
              <td>
                <div className="row justify-content-md-center justify-content-around">
                  <i className="fas fa-edit"></i>
                  <i onClick={Alerts[1]} className="fas fa-trash-alt"></i>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default ListUsers;
