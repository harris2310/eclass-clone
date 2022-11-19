import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

type Props = {
  children: any;
};

const HeaderLayout = ({ children }: Props) => {
  return (
    <div className='flex grow justify-between flex-col min-h-screen'>
      <Header />
      <main className='bg-gray-50 mx-auto h-full flex flex-col  grow w-10/12 text-center'>{children}</main>
      <Footer />
    </div>
  );
};

export default HeaderLayout;
