import React from "react";
import Header from "components/template-base/Header";
import Aside from "components/template-base/Aside";
import Footer from "components/template-base/Footer";
import Section_header from "components/card-base/Section_header";
import Section_body from "components/card-base/Section_body";

const Users = () => {
  return (
    <div>
      <Header />
      <Aside />
      <div class="main-content" style={{minHeight: 581}}>
      <section class="section">
      <Section_header titleUsers="Usuarios" />
      <Section_body titleListUsers="Listado de Usuarios"/>
      </section>
      </div>
      <Footer />
    </div>
  );
}
export default Users;
