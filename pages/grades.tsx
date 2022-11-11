import Head from "next/head";
import { unstable_getServerSession } from "next-auth/next";
import HeaderLayout from "../layouts/HeaderLayout";
import GradesScreen from "../components/screens/GradesScreen";
import { requireAuth } from "../utils/requireAuth";
import prisma from "../lib/prismadb";
import { authOptions } from "./api/auth/[...nextauth]";

type Props = {
  grades: Array<{
    courseId: number;
    studentId: number;
    grade: number;
  }>;
  courses: Array<{
    id: number;
    name: string;
    term: number;
    description: string;
    open: boolean;
  }>;
};

export default function Home({ grades, courses }: Props) {
  return (
    <div>
      <Head>
        <title>E-class</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderLayout>
        <GradesScreen grades={grades} courses={courses} />
      </HeaderLayout>
    </div>
  );
}

export async function getServerSideProps(context: any) {
  return requireAuth(context, async () => {
    const session = await unstable_getServerSession(
      context.req,
      context.res,
      authOptions
    );
    const email = session.user.email;
    const courses = await prisma.course.findMany();
    const data = await prisma.student.findMany({
      where: { email: email },
      include: { grades: true },
    });
    const grades = data[0].grades;
    let coursesToFind: Array<number> = [];
    return { props: { grades, courses } };
  });
}
