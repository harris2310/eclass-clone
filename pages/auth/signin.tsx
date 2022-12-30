import React, { useState, useEffect } from "react";
import Head from "next/head";
import { getProviders } from "next-auth/react";
import SignInScreen from "../../components/screens/SignInScreen";
import HeaderLayout from "../../layouts/HeaderLayout";
import { PrismaClient } from "@prisma/client";
import type { Announcements } from "types";

type Props = {
  generalAnnouncements: Announcements;
};

const exampleProvider = {
  google: { id: "google", name: "Google", type: "oauth", signinUrl: "http://localhost:3000/api/auth/signin/google", callbackUrl: "http://localhost:3000/api/auth/callback/google" },
};

export default function SignIn({ generalAnnouncements }: Props) {
  const [providers, setProviders] = useState(exampleProvider);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      if (typeof res !== null) {
        setProviders(res!);
      }
    })();
  }, []);
  return (
    <>
      <Head>
        <title>Hanozi-Class</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <HeaderLayout>
        <SignInScreen providers={providers} generalAnnouncements={generalAnnouncements} />
      </HeaderLayout>
    </>
  );
}

export async function getServerSideProps(context: any) {
  const prisma = new PrismaClient();
  let generalAnnouncements = await prisma.announcement.findMany({
    where: { courseId: 1000 },
  });
  generalAnnouncements = JSON.parse(JSON.stringify(generalAnnouncements));
  return {
    props: { generalAnnouncements },
  };
}
