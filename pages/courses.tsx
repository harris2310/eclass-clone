import React from "react";
import Head from "next/head";
import HeaderLayout from "../layouts/HeaderLayout";
import CoursesScreen from "../components/screens/CoursesScreen";

type Props = {};

const courses = (props: Props) => {
  return (
    <div>
      {" "}
      <Head>
        <title>E-class</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderLayout>
        <CoursesScreen />
      </HeaderLayout>
    </div>
  );
};

export default courses;