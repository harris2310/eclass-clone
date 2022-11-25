import React from "react";
import Head from "next/head";
import HeaderLayout from "layouts/HeaderLayout";
import { useSession } from "next-auth/react";
import prisma from "../lib/prismadb";
import { requireAuth } from "utils/requireAuth";
import { unstable_getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]";
import Image from "next/image";
type Props = { student: { id: number; firstName: string; lastName: string; email: string; year: number } };

function Account({ student }: Props) {
  const session = useSession();
  return (
    <div>
      <Head>
        <title>E-class | Account</title>
        <meta name='description' content='Account page' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <HeaderLayout>
        <div className='bg-gray-100 text w-8/12 mx-auto my-16 border-cyan-600 border-2 p-6 text-left'>
          <div className='flex  items-center'>
            <div>
              <div className='font-bold text-lg inline-block mr-8 w-40'>Full Name:</div>
              <div className='inline'>
                {student.firstName} {student.lastName}
              </div>
            </div>
            {session?.data?.user?.image && <Image className='inline rounded-full ml-auto ' src={session.data?.user!.image} alt='harris' width={60} height={60} />}
          </div>
          <div className='mt-8'>
            <div className='font-bold text-lg mr-8  inline-block w-40'>Email: </div>
            <div className='inline'>{student.email}</div>
          </div>
          <div className='mt-6'>
            <div className='font-bold text-lg mr-8  inline-block w-40'>Year: </div>
            <div className='inline'>{student.year}</div>
          </div>
          <div className='mt-6'>
            <div className='font-bold text-lg mr-8  inline-block w-40'>Place of birth: </div>
            <div className='inline'>Thessaloniki</div>
          </div>
        </div>{" "}
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
