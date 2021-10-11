import React from "react";
import Card from "components/Card";
import Alerts from "styles/js/alerts";


const ListVentas = () => {
  return (
    <Card
      titulo="Módulo de ventas"
      subtitulo="Listado de ventas"
      ruta1="inicio"
      ruta2="Ventas"
      ruta3="Lista de ventas"
      boton="Nueva venta"
      icon="far fa-user"
      rutaheadercard="/formventas"
    
    >
      <div className="table-responsive">
        <table id="example" className="table table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre del vendedor</th>
              <th>Descripción de la venta</th>
              <th>Valor total</th>
              <th>Estado</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>0001</td>
              <td>Camilo Echeverry</td>
              <td>Samsung GAlaxy A30</td>
              <td>$4000000</td>
              <td>
                <div class="badge badge-success">Entregada</div>
              </td>
              <td>
                <div class="row justify-content-md-center">
                  <a>
                    <i class="fas fa-edit"></i>
                  </a>
                  <a onClick={Alerts[1]}>
                    <i class="fas fa-trash-alt"></i>
                  </a>
                </div>
              </td>
            </tr>
            <tr>
              <td>0002</td>
              <td>Cristina Maldonado</td>
              <td>Apple TV</td>
              <td>$8500000</td>
              <td>
                <div class="badge badge-danger">Cancelada</div>
              </td>
              <td>
                <div class="row justify-content-md-center">
                  <a>
                    <i class="fas fa-edit"></i>
                  </a>
                  <a onClick={Alerts[1]}>
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

export default ListVentas;