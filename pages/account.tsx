import React from "react";
import Head from "next/head";
import HeaderLayout from "layouts/HeaderLayout";
import { useSession } from "next-auth/react";
import prisma from "../lib/prismadb";
import { requireAuth } from "utils/requireAuth";
import { unstable_getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]";
import Image from "next/image";
import AccountScreen from "components/screens/AccountScreen";
type Props = { student: { id: number; firstName: string; lastName: string; email: string; year: number; birthPlace: string } };

function Account({ student }: Props) {
  const session = useSession();
  return (
    <div>
      <Head>
        <title>Hanozi-Class | Account</title>
        <meta name='description' content='Account page' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <HeaderLayout>
        <AccountScreen session={session} student={student} />
      </HeaderLayout>
    </div>
  );
}

export async function getServerSideProps(context: any) {
  return requireAuth(context, async () => {
    const session = await unstable_getServerSession(context.req, context.res, authOptions);
    const email = session!.user!.email!;
    const student = await prisma.student.findUnique({
      where: { email: email },
    });
    return { props: { student } };
  });
}

export default Account;
