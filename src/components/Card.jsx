import { Link } from "react-router-dom"; 

const Card = ({children, titulo, subtitulo, ruta1, ruta2, ruta3}) => {
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
        <div class="section-body">
          <h2 class="section-title">{subtitulo}</h2>
          {/* <p class="section-lead">This page is just an example for you to create your own page.</p> */}
          <div class="card">
            <div class="card-body">
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
