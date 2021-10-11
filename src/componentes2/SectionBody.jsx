import React from "react";
import SectionHeader from "./SectionHeader";
import Tabla from "./tabla";

const SectionBody = () => {
  console.log("hola")
  return (
    <>
      <SectionHeader />
      <div className="section-body">
        <h2 className="section-title">kjjj</h2>
        <p className="section-lead">
          Example of some Bootstrap table components.
        </p>
        <Tabla title="pp"/>
      </div>
    </>
  );
};

export default SectionBody;
