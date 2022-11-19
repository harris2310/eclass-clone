import React from "react";
import HeaderLayout from "../../layouts/HeaderLayout";
import Head from "next/head";

type Props = {
  announcement: { id: number; date: string; title: string; content: string };
};

const DynamicAnn = ({ announcement }: Props) => {
  return (
    <>
      <Head>
        <title>E-class | Announcements</title>
        <meta name='description' content='Has General Announcements if you user is not loggedIn and Course Announcements if user is loggedIn' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <HeaderLayout>
        <div> hi </div>
      </HeaderLayout>
    </>
  );
};

/*
export async function getServerSideProps(context: any) {
  let { id } = context.query;
  id = parseInt(id);
  let announcement = await prisma.announcement.findUnique({
    where: { id: id },
  });
  announcement = JSON.parse(JSON.stringify(announcement));
  console.log(announcement);
  return { props: { announcement } };
}
*/

export default DynamicAnn;
