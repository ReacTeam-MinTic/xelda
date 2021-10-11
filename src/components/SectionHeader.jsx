import React from "react";
import { Link } from "react-router-dom";

const SectionHeader = () => {
  return (
    <div className="section-header">
      <h1></h1>

      <div className="section-header-breadcrumb">
        <div className="breadcrumb-item active">
          <Link to="#"></Link>
        </div>
        <div className="breadcrumb-item">
          <Link to="#"></Link>
        </div>
        <div className="breadcrumb-item"></div>
      </div>
    </div>
  );
};

export default SectionHeader;
