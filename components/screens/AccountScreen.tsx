import React from "react";
import Image from "next/image";
import type { Account } from "types";

type Props = { session: any } & Account;

function AccountScreen({ session, student }: Props) {
  return (
    <div className='bg-gray-100 text-lg w-7/12 mx-auto my-16 border-cyan-600 border-2 p-6 text-left'>
      <div className='flex  items-center'>
        <div>
          <div className='font-bold  inline-block mr-8 w-40 border-r-2 border-slate-400'>Full Name</div>
          <div className='inline'>
            {student.firstName} {student.lastName}
          </div>
        </div>
        {session?.data?.user?.image && <Image className='inline rounded-full ml-auto ' src={session.data?.user!.image} alt='harris' width={60} height={60} />}
      </div>
      <div className='mt-10'>
        <div className='font-bold  mr-8  inline-block w-40 border-r-2 border-slate-400'>Email </div>
        <div className='inline '>{student.email}</div>
      </div>
      <div className='mt-10'>
        <div className='font-bold  mr-8  inline-block w-40 border-r-2 border-slate-400'>Year </div>
        <div className='inline '>{student.year}</div>
      </div>
      <div className='mt-10'>
        <div className='font-bold  mr-8  inline-block w-40 border-r-2 border-slate-400'>Place of birth </div>
        <div className='inline'>{student.birthPlace}</div>
      </div>
    </div>
  );
}

export default AccountScreen;
