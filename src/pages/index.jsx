import React from "react";
import Aside from "components/template-base/Aside";
import ContentIndex from "components/Content_index";
import Footer from "components/template-base/Footer";
import Header from "components/template-base/Header";

const Index = () => {
  return (
    <div>
      <Header />
      <Aside />
      <ContentIndex />
      <Footer />
    </div>
  );
}

export default Index;
