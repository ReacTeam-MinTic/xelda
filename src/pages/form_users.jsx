import React from "react";
import LayoutsCard from "layouts/layouts-card";

const Form_users = () => {
  return (
    <>
    <LayoutsCard >
      
        <div className="card-header">
          <h4>Input Group Text</h4>
        </div>
        <div className="card-body">
          <div className="form-group">
            <div className="input-group mb-2">
              <div className="input-group-prepend">
                <div className="input-group-text">@</div>
              </div>
              <input
                type="text"
                className="form-control"
                id="inlineFormInputGroup"
                placeholder="Username"
              />
            </div>
          </div>
          <div className="form-group">
            <div className="input-group mb-2">
              <input
                type="text"
                className="form-control text-right"
                id="inlineFormInputGroup2"
                placeholder="Your URL"
              />
              <div className="input-group-append">
                <div className="input-group-text">.com</div>
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">$</span>
              </div>
              <input
                type="text"
                className="form-control"
                aria-label="Amount (to the nearest dollar)"
              />
              <div className="input-group-append">
                <span className="input-group-text">.00</span>
              </div>
            </div>
          </div>
        </div>
        </LayoutsCard>
      
    </>
  );
};

export default Form_users;
