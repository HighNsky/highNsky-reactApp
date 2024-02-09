
import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const BasicLayout = ({ children }: any) => {
  return (
    <>
      <Header />
    
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default BasicLayout;
