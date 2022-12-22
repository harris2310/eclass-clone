import React from "react";
import Head from "next/head";
import HeaderLayout from "../layouts/HeaderLayout";
import CoursesScreen from "../components/screens/CoursesScreen";
import { requireAuth } from "../utils/requireAuth";
import prisma from "../lib/prismadb";
import { unstable_getServerSession } from "next-auth";
import { authOptions } from "pages/api/auth/[...nextauth]";
import { PrismaClient, Session } from "@prisma/client";
import { useSession } from "next-auth/react";
import CoursesUserScreen from "components/screens/CoursesUserScreen";

type Props = {
  courses: Array<{
    id: number;
    name: string;
    term: number;
    description: string;
    open: boolean;
  }>;
};

const CoursesPage = ({ courses }: Props) => {
  const session = useSession();
  console.log(session);
  courses.sort((a, b) => (a.term > b.term ? 1 : -1));
  return (
    <div>
      {" "}
      <Head>
        <title>Hanozi-Class</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <HeaderLayout>{!session.data ? <CoursesScreen courses={courses} /> : <CoursesUserScreen courses={courses} />}</HeaderLayout>
    </div>
  );
};

export async function getServerSideProps(context: any) {
  return requireAuth(context, async () => {
    const data = await prisma.course.findMany();
    let courses = data;
    return { props: { courses } };
  });
}

export default CoursesPage;
