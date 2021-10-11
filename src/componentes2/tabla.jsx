import React from "react";

const Tabla = () => {
  return (
    <>
    
    <div className="row">
      <div className="col-12 col-md-12 col-lg-12">
        <div className="card">
          <div className="card-header">
            <h4>ooo</h4>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-bordered table-md">
                <tbody>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Created At</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Irwansyah Saputra</td>
                    <td>2017-01-09</td>
                    <td>
                      <div className="badge badge-success">Active</div>
                    </td>
                    <td>
                      <a href="#" className="btn btn-secondary">
                        Detail
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Hasan Basri</td>
                    <td>2017-01-09</td>
                    <td>
                      <div className="badge badge-success">Active</div>
                    </td>
                    <td>
                      <a href="#" className="btn btn-secondary">
                        Detail
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Kusnadi</td>
                    <td>2017-01-11</td>
                    <td>
                      <div className="badge badge-danger">Not Active</div>
                    </td>
                    <td>
                      <a href="#" className="btn btn-secondary">
                        Detail
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Rizal Fakhri</td>
                    <td>2017-01-11</td>
                    <td>
                      <div className="badge badge-success">Active</div>
                    </td>
                    <td>
                      <a href="#" className="btn btn-secondary">
                        Detail
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="card-footer text-right">
            <nav className="d-inline-block">
              <ul className="pagination mb-0">
                <li className="page-item disabled">
                  <a className="page-link" href="#" tabIndex={-1}>
                    <i className="fas fa-chevron-left" />
                  </a>
                </li>
                <li className="page-item active">
                  <a className="page-link" href="#">
                    1 <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    <i className="fas fa-chevron-right" />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
    
    </>
  );
};

export default Tabla;
