import React from "react";
import HeaderLayout from "../../layouts/HeaderLayout";
import CourseEachScreen from "../../components/screens/CourseEachScreen";
import Head from "next/head";
import prisma from "../../lib/prismadb";
import { unstable_getServerSession } from "next-auth";
import { authOptions } from "pages/api/auth/[...nextauth]";

type Props = {
  course: { id: number; term: number; description: string; name: string; open: boolean; announcements: Array<Object> };
};

const Course = ({ course }: Props) => {
  return (
    <>
      <Head>
        <title>{`Hanozi-Class | ${course.name}`}</title>
        <meta name='description' content='Has General Announcements if you user is not loggedIn and Course Announcements if user is loggedIn' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <HeaderLayout>
        <CourseEachScreen course={course} />
      </HeaderLayout>
    </>
  );
};

export async function getServerSideProps(context: any) {
  const session = unstable_getServerSession(context.req, context.res, authOptions);
  let { id } = context.query;
  id = parseInt(id);
  let course = await prisma.course.findUnique({
    where: { id: id },
    include: { announcements: true },
  });
  {
  }
  if (!session) {
    if (course?.open != true) {
      return {
        notFound: true,
      };
    }
  }
  course = JSON.parse(JSON.stringify(course));
  return { props: { course } };
}

export default Course;
