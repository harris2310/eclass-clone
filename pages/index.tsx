import Head from "next/head";
import HomeScreen from "../components/screens/HomeScreen";
import HeaderLayout from "../layouts/HeaderLayout";
import { requireAuth } from "../utils/requireAuth";
import prisma from "../lib/prismadb";
import type { AnnouncementEach } from "types";

type Props = {
  generalAnnouncements: Array<AnnouncementEach>;
};

export default function Home({ generalAnnouncements }: Props) {
  return (
    <div>
      <Head>
        <title>Hanozi-Class</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <HeaderLayout>
        <HomeScreen generalAnnouncements={generalAnnouncements} />
      </HeaderLayout>
    </div>
  );
}

export async function getServerSideProps(context: any) {
  return requireAuth(context, async () => {
    let generalAnnouncements = await prisma.announcement.findMany({
      where: { courseId: 1000 },
    });
    generalAnnouncements = JSON.parse(JSON.stringify(generalAnnouncements));
    return {
      props: { generalAnnouncements },
    };
  });
}
