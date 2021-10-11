import React from "react";

const SectionBody = () => {
  return (
    <div className="section-body">
      <h2 className="section-title"></h2>
      {/* <p className="section-lead">This page is just an example for you to create your own page.</p> */}
      <div className="card">
        <div className="card-header">
          {/* <h4>Example Card</h4> */}
          <div style={{ marginLeft: "auto" }}>
            <a
              onClick="{setWiewTable(!viewTable)}"
              className="btn btn-lg btn-icon icon-left btn-primary text-white"
            >
              <i className=""></i> "svalue"
            </a>
          </div>
        </div>
        <div className="card-body">
          {/* <main>{children}</main> */}
          <h1>hhola</h1>
        </div>
        <div className="d-flex justify-content-end card-footer bg-whitesmoke">
          © 2021 - Xelda™
        </div>
      </div>
    </div>
  );
};

export default SectionBody;
