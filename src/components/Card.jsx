import { Link } from "react-router-dom"; 

<<<<<<< HEAD
const Card = ({children, titulo, subtitulo, ruta1, ruta2, ruta3, boton, rutaBoton, icon}) => {
=======
const Card = ({children, titulo, subtitulo, ruta1, ruta2, ruta3}) => {
>>>>>>> hu_08_gestionar_roles_y_usuarios
  return (
    <div className="main-content" style={{ minHeight: 581 }}>
      <section className="section">
        <div className="section-header">
          <h1>{titulo}</h1>
          
          <div className="section-header-breadcrumb">
            <div className="breadcrumb-item active">
              <Link to="#">{ruta1}</Link>
            </div>
            <div className="breadcrumb-item">
              <Link to="#">{ruta2}</Link>
            </div>
            <div className="breadcrumb-item">{ruta3}</div>
          </div>
        </div>
<<<<<<< HEAD
        <div className="section-body">
          <h2 className="section-title">{subtitulo}</h2>
          {/* <p className="section-lead">This page is just an example for you to create your own page.</p> */}
          <div className="card">
            <div className="card-header">{/* <h4>Example Card</h4> */}
              <div style={{marginLeft: 'auto'}}>
                <Link to={rutaBoton} className="btn btn-lg btn-icon icon-left btn-primary"><i className={icon}></i>{boton}</Link>
              </div>
            </div>
            <div className="card-body">
=======
        <div class="section-body">
          <h2 class="section-title">{subtitulo}</h2>
          {/* <p class="section-lead">This page is just an example for you to create your own page.</p> */}
          <div class="card">
            <div class="card-body">
>>>>>>> hu_08_gestionar_roles_y_usuarios
              <main>{children}</main>
            </div>
            <div className="d-flex justify-content-end card-footer bg-whitesmoke">© 2021 - Xelda™</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Card;
