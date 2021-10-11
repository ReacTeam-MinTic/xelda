import React from "react";

const CardHeader = ({setWiewTable, viewTable, textButton}) => {
  return (
    <div className="card-header">
      <div class="container">
        <div class="row">
          <div class="col">
            
          </div>
          <div class="col col-lg-3">
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
