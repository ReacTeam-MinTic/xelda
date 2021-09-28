import React from "react";
import { Link } from "react-router-dom";

const Section_header = ({titleUsers}) => {
  return (
    
        <div class="section-header">
          <h1>{titleUsers}</h1>
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
    
  );
}

export default Section_header;
