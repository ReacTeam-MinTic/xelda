import React from "react";
import { Link } from "react-router-dom";

const SectionHeader = ({subtitle, title}) => {
  return (
    <div className="section-header">
      <h1>{title}</h1>
      <div className="section-header-breadcrumb">
        <div className="breadcrumb-item active">
          <Link >Inicio</Link>
        </div>
        <div className="breadcrumb-item">
          <Link >{subtitle}</Link>
        </div>
        
      </div>
    </div>
  );
};

export default SectionHeader;

