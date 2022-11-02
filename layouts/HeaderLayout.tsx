import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

type Props = {
  children: any;
};

const HeaderLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main className="mx-auto flex flex-col min-h-screen">{children}</main>
      <Footer />
    </>
  );
};

export default HeaderLayout;
