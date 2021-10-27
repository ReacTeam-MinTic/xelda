import React from "react";

const CardHeader = ({setWiewTable, viewTable, textButton}) => {
  return (
    <div className="card-header">
      <div className="container">
        <div className="row">
          <div className="col">
            
          </div>
          <div className="col col-lg-3">
            <button onClick={()=> setWiewTable(!viewTable)} className="btn btn-icon icon-left btn-primary float-right">
              <i className="far fa-edit"></i>{textButton}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardHeader;
