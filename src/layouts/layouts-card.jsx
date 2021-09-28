import { Link } from "react-router-dom";

const LayoutsCard = ({children}) => {
  return (
    <div class="main-content" style={{ minHeight: 581 }}>
      <section class="section">
        <div class="section-header">
          <h1>"tirtulo"</h1>
          <div class="section-header-breadcrumb">
            <div class="breadcrumb-item active">
              <Link to="#">Dashboard</Link>
            </div>
            <div class="breadcrumb-item">
              <Link to="#">Layout</Link>
            </div>
            <div class="breadcrumb-item">Default Layout</div>
          </div>
        </div>
        <div class="section-body">
          <h2 class="section-title">2tieulo</h2>
          {/* <p class="section-lead">This page is just an example for you to create your own page.</p> */}
          <div class="card">
            <div class="card-header">{/* <h4>Example Card</h4> */}</div>
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

export default LayoutsCard;
