import Card from "components/Card";
import Alerts from "styles/js/alerts";

const ListProducts = () => {
  return (
    <Card
      titulo="Módulo de Productos"
      subtitulo="Listado de productos"
      ruta1="Inicio"
      ruta2="Productos"
      ruta3="Lista de productos"
      boton="Nuevo producto"
      icon="fas fa-briefcase"
      rutaheadercard="/formproducts"
    >
      <div className="table-responsive">
        <table id="example" className="table table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Valor unitario</th>
              <th>Estado</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>0001</td>
              <td>Samsung Note 10</td>
              <td>Procesador x10 con cámara de 10 mpx</td>
              <td>$4000000</td>
              <td>
                <div className="badge badge-success">Disponible</div>
              </td>
              <td>
                <div className="row justify-content-md-center">
                  <i className="fas fa-edit"></i>
                  <i onClick={Alerts[1]} className="fas fa-trash-alt"></i>
                </div>
              </td>
            </tr>
            <tr>
              <td>0001</td>
              <td>Samsung GAlaxy A30</td>
              <td>Procesador x10 con cámara de 10 mpx</td>
              <td>$1000000</td>
              <td>
                <div className="badge badge-danger"> No Disponible</div>
              </td>
              <td>
                <div className="row justify-content-md-center">
                  <i className="fas fa-edit"></i>
                  <i className="fas fa-trash-alt"></i>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default ListProducts;
