import React from "react";
import GeneralAnnouncementScreen from "../../../components/screens/GeneralAnnouncementScreen";
import HeaderLayout from "../../../layouts/HeaderLayout";
import Head from "next/head";
import prisma from "lib/prismadb";
import type { AnnouncementEach } from "types";

type Props = {
  announcement: AnnouncementEach;
};

const DynamicAnn = ({ announcement }: Props) => {
  return (
    <>
      <Head>
        <title>Hanozi-Class | Announcements</title>
        <meta name='description' content='Has General Announcements if you user is not loggedIn and Course Announcements if user is loggedIn' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <HeaderLayout>
        <GeneralAnnouncementScreen announcement={announcement} />{" "}
      </HeaderLayout>
    </>
  );
};

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

export default DynamicAnn;
