import { Link } from "react-router-dom";

const Card = ({children, titulo, subtitulo, ruta1, ruta2, ruta3, boton, icon}) => {
  return (
    <div class="main-content" style={{ minHeight: 581 }}>
      <section class="section">
        <div class="section-header">
          <h1>{titulo}</h1>
          
          <div class="section-header-breadcrumb">
            <div class="breadcrumb-item active">
              <Link to="#">{ruta1}</Link>
            </div>
            <div class="breadcrumb-item">
              <Link to="#">{ruta2}</Link>
            </div>
            <div class="breadcrumb-item">{ruta3}</div>
          </div>
        </div>
        <div class="section-body">
          <h2 class="section-title">{subtitulo}</h2>
          {/* <p class="section-lead">This page is just an example for you to create your own page.</p> */}
          <div class="card">
            <div class="card-header">{/* <h4>Example Card</h4> */}
            <div style={{marginLeft: 'auto'}}>
            <a href="#" class="btn btn-lg btn-icon icon-left btn-primary"><i class={icon}></i> {boton}</a>
            </div>
            </div>
            <div class="card-body">
              <main>{children}</main>
            </div>
            <div class="card-footer bg-whitesmoke">This is card footer</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Card;
