import Card from "components/Card";

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
                <div class="badge badge-success">Activo</div>
              </td>
              <td>
                <div class="badge badge-warning">Vendedor</div>
              </td>
              <td>gustavo@hotmail.com</td>
              <td>
                <div class="row justify-content-md-center">
                  <a href="">
                    <i class="fas fa-edit"></i>
                  </a>
                  <a href="">
                    <i class="fas fa-trash-alt"></i>
                  </a>
                </div>
              </td>
            </tr>
            <tr>
              <td>0001</td>
              <td>Gustavo Adolfo</td>
              <td>De Armas Nuñez</td>
              <td>
                <div class="badge badge-danger">Inactivo</div>
              </td>
              <td>
                <div class="badge badge-primary">Admin</div>
              </td>
              <td>gustavo@hotmail.com</td>
              <td>
                <div class="row justify-content-md-center">
                  <a href="">
                    <i class="fas fa-edit"></i>
                  </a>
                  <a href="">
                    <i class="fas fa-trash-alt"></i>
                  </a>
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
