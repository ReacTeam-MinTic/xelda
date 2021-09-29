import LayoutsCard from 'layouts/card'

const ListProducts = () => {
    return (
        <LayoutsCard titulo="Módulo de Productos" subtitulo="Listado de productos" ruta1="Inicio" ruta2="Productos" ruta3="Lista de productos" boton="Nuevo producto">
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
                <td><div class="badge badge-success">Disponible</div></td>
                <td>
                  <div class="row justify-content-md-center">
                    <a href=""><i class="fas fa-edit"></i></a>
                    <a href=""><i class="fas fa-trash-alt"></i></a>
                  </div>
                  </td>
              </tr>
              <tr>
                <td>0001</td>
                <td>Samsung GAlaxy A30</td>
                <td>Procesador x10 con cámara de 10 mpx</td>
                <td>$1000000</td>
                <td><div class="badge badge-danger"> No Disponible</div></td>
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
    )
}

export default ListProducts
