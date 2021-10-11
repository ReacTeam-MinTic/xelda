import React from "react";
import SectionHeader from "./SectionHeader";
import SectionTitle from "components/SectionTitle";
import CardHeader from "components/CardHeader";

const SectionBody = ({ children }) => {
  return (
    <>
      <SectionHeader />
      <SectionTitle />
      <div className="card">
        <CardHeader />
        <div className="card-body">{children}</div>
      </div>
    </>
  );
};

export default SectionBody;
