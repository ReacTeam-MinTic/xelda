import { Link } from "react-router-dom";

const LayoutsCard = ({children, titulo, subtitulo, tituloCardHeader, nombreBoton}) => {
  return (
    <div className="main-content" style={{ minHeight: 581 }}>
      <section className="section">
        <div className="section-header">
          <h1>{titulo}</h1>
          {/* <div className="section-header-breadcrumb">
            <div className="breadcrumb-item active">
              <Link to="#">Dashboard</Link>
            </div>
            <div className="breadcrumb-item">
              <Link to="#">Layout</Link>
            </div>
            <div className="breadcrumb-item">Default Layout</div>
          </div> */}
        </div>
        <div className="section-body">
          <h2 className="section-title">{subtitulo}</h2>
          {/* <p className="section-lead">This page is just an example for you to create your own page.</p> */}
          <div className="card">
            <div className="d-flex justify-content-between card-header">
              <h3>{tituloCardHeader}</h3>
              <div className="d-flex justify-content-end">
                <button className="btn btn-success p-2 "><h6 className="m-0">{nombreBoton}</h6></button>
            </div>
            </div>
            <div className="card-body">
              <main>{children}</main>
            </div>
{/*             <div className="card-footer bg-whitesmoke">This is card footer</div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LayoutsCard;
