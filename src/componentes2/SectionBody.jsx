import React from "react";
import SectionHeader from "./SectionHeader";



const SectionBody = ({children}) => {
  
  return (
    <>
      <SectionHeader />
      <div className="section-body">
      
        <main>{children}</main>
      </div>
    </>
  );
};

export default SectionBody;
