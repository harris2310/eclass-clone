import Head from "next/head";
import LoginScreen from "../components/screens/SignInScreen";
import HomeScreen from "../components/screens/HomeScreen";
import { useSession, getSession } from "next-auth/react";
import HeaderLayout from "../layouts/HeaderLayout";
import { requireAuth } from "../utils/requireAuth";

export default function Home({ generalAnnouncements }: any) {
  return (
    <div>
      <Head>
        <title>E-class</title>
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
