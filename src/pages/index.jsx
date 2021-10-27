const Index = () => {
  return (
    
    <section className="section">
      <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div className="card card-statistic-2">
            <div className="card-stats">
              <div className="card-stats-title">Modulo de ventas
                
              </div>
              <div className="card-stats-items">
                <div className="card-stats-item">
                  <div className="card-stats-item-count">1023</div>
                  <div className="card-stats-item-label">Completadas</div>
                </div>
                <div className="card-stats-item">
                  <div className="card-stats-item-count">24</div>
                  <div className="card-stats-item-label">Pendiente</div>
                </div>
                <div className="card-stats-item">
                  <div className="card-stats-item-count">4</div>
                  <div className="card-stats-item-label">Canceladas</div>
                </div>
              </div>
            </div>
            <div className="card-icon shadow-primary bg-primary">
              <i className="fas fa-archive" />
            </div>
            <div className="card-wrap">
              <div className="card-header">
                <h4>Total Ventas</h4>
              </div>
              <div className="card-body">
                $23.087.293
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div className="card card-statistic-2">
            <div className="card-stats">
              <div className="card-stats-title">Modulo de Productos
                
              </div>
              <div className="card-stats-items">
                <div className="card-stats-item">
                  <div className="card-stats-item-count">9</div>
                  <div className="card-stats-item-label">Vendeores</div>
                </div>
                <div className="card-stats-item">
                  <div className="card-stats-item-count">2</div>
                  <div className="card-stats-item-label">Admin</div>
                </div>
                
              </div>
            </div>
            <div className="card-icon shadow-primary bg-primary">
              <i className="fas fa-archive" />
            </div>
            <div className="card-wrap">
              <div className="card-header">
                <h4>Total Usuarios</h4>
              </div>
              <div className="card-body">
                11
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div className="card card-statistic-2">
            <div className="card-stats">
              <div className="card-stats-title">Modulo de productos
                
              </div>
              <div className="card-stats-items">
                <div className="card-stats-item">
                  <div className="card-stats-item-count">134</div>
                  <div className="card-stats-item-label">Disponibles</div>
                </div>
                <div className="card-stats-item">
                  <div className="card-stats-item-count">11</div>
                  <div className="card-stats-item-label">No disponibles</div>
                </div>
              
              </div>
            </div>
            <div className="card-icon shadow-primary bg-primary">
              <i className="fas fa-archive" />
            </div>
            <div className="card-wrap">
              <div className="card-header">
                <h4>Total Inventario</h4>
              </div>
              <div className="card-body">
                155
              </div>
            </div>
          </div>
        </div>
      
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header">
              <h4>Pendiente por información</h4>
            </div>
            <div className="card-body">
              <canvas id="myChart" height={158} />
            </div>
          </div>
        </div>
        </div>
      </section>
  
  
  );
}

export default Index;