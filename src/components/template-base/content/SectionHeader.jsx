import React from "react";

const SectionHeader = () => {
  return (
    <div className="section-header">
      <h1>Table</h1>
      <div className="section-header-breadcrumb">
        <div className="breadcrumb-item active">
          <a href="#">Dashboard</a>
        </div>
        <div className="breadcrumb-item">
          <a href="#">Components</a>
        </div>
        <div className="breadcrumb-item">Table</div>
      </div>
    </div>
  );
};

export default SectionHeader;

