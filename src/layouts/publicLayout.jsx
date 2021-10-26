import React from 'react';

const PublicLayout = ({ children }) => {
  return (
    <>
      <div className="main-content">
        <section className="section">{children}</section>
      </div>
    </>
  );
};

export default PublicLayout;