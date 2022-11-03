import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

type Props = {
  children: any;
};

const HeaderLayout = ({ children }: Props) => {
  return (
    <div className="flex grow  flex-col min-h-screen">
      <Header />
      <main className="mx-auto flex flex-col w-10/12 text-center">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default HeaderLayout;
