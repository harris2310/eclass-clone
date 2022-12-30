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
import CurriculumScreen from "components/screens/CurriculumScreen";

type Props = {
  courses: Array<{
    id: number;
    name: string;
    term: number;
    description: string;
    open: boolean;
  }>;
  myCourses: Array<{
    id: number;
    name: string;
    term: number;
    description: string;
    open: boolean;
  }>;
};

const CoursesPage = ({ courses, myCourses }: Props) => {
  const session = useSession();
  courses.sort((a, b) => (a.term > b.term ? 1 : -1));
  return (
    <div>
      {" "}
      <Head>
        <title>Hanozi-Class</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <HeaderLayout>
        <CoursesScreen courses={courses} />
        <CurriculumScreen />
      </HeaderLayout>
    </div>
  );
};

export async function getServerSideProps(context: any) {
  const session = await unstable_getServerSession(context.req, context.res, authOptions);
  return requireAuth(context, async () => {
    const data = await prisma.course.findMany();
    let courses = data;
    // return student's courses
    const email = session!.user!.email!;
    const myData = await prisma.student.findMany({
      include: {
        courses: true,
      },
      where: {
        email: email,
      },
    });
    const courseIds = myData[0].courses.map((c: any) => c.courseId);
    let myCourses = await prisma.course.findMany({
      where: { id: { in: courseIds } },
    });
    return { props: { courses, myCourses } };
  });
}

export default CoursesPage;
