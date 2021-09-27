import React from "react";
import Header from "components/template-base/Header";
import Aside from "components/template-base/Aside";
import Footer from "components/template-base/Footer";
import Section_header from "components/card-base/Section_header";
import Section_body from "components/card-base/Section_body";

export default function Users() {
  return (
    <div>
      <Header />
      <Aside />
      <div class="main-content" style={{minHeight: 581}}>
      <section class="section">
      <Section_header />
      <Section_body />
      </section>
      </div>
      <Footer />
    </div>
  );
}
