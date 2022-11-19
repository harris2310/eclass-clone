import React from "react";
import HeaderLayout from "../../layouts/HeaderLayout";
import CourseEachScreen from "../../components/screens/CourseEachScreen";
import Head from "next/head";
import prisma from "../../lib/prismadb";

type Props = {
  course: { id: number; term: number; description: string; name: string; open: boolean };
};

const Course = ({ course }: Props) => {
  return (
    <>
      <Head>
        <title>E-class | {course.name}</title>
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
  let { id } = context.query;
  id = parseInt(id);
  let course = await prisma.course.findUnique({
    where: { id: id },
  });
  if (course?.open != true) {
    return {
      notFound: true,
    };
  }
  course = JSON.parse(JSON.stringify(course));
  console.log(course);
  return { props: { course } };
}

export default Course;
