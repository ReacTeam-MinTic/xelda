import React from 'react';
import Navbar from 'components/NavBar';
import Footer from 'components/Footer';

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