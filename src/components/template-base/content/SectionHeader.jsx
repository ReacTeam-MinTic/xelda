import React from "react";

const SectionHeader = ({subtitle, title}) => {
  return (
    <div className="section-header">
      <h1>{title}</h1>
      <div className="section-header-breadcrumb">
        <div className="breadcrumb-item active">
          <a href="#">Inicio</a>
        </div>
        <div className="breadcrumb-item">
          <a href="#">{subtitle}</a>
        </div>
        
      </div>
    </div>
  );
};

export default SectionHeader;

