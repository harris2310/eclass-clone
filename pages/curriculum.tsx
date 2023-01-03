import React from "react";
import Head from "next/head";
import HeaderLayout from "../layouts/HeaderLayout";
import CoursesScreen from "../components/screens/CoursesScreen";
import { requireAuth } from "../utils/requireAuth";
import prisma from "../lib/prismadb";
import { unstable_getServerSession } from "next-auth";
import { authOptions } from "pages/api/auth/[...nextauth]";
import type { Courses } from "types";
import { useSession } from "next-auth/react";
import CoursesUserScreen from "components/screens/CoursesUserScreen";
import CurriculumScreen from "components/screens/CurriculumScreen";

const CoursesPage = ({ courses }: { courses: Courses }) => {
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
  const data = await prisma.course.findMany();
  let courses = data;
  // return student's courses
  const myData = await prisma.student.findMany({
    include: {
      courses: true,
    },
  });
  const courseIds = myData[0].courses.map((c: any) => c.courseId);
  let myCourses = await prisma.course.findMany({
    where: { id: { in: courseIds } },
  });
  return { props: { courses, myCourses } };
}

export default CoursesPage;
