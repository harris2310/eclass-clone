import React, { useEffect } from "react";
import { signIn } from "next-auth/react";
import Button from "../common/Button";
import { Variant } from "../common/Button";
import { Tab } from "@headlessui/react";
import PaginTab from "../common/PaginTab";
import AnnouncementsTable from "../common/AnnouncementsTable";
import Image from "next/image";
import googleSVG from "../../assets/google_icon.svg";
import type { Announcements, AnnouncementEach } from "types";

type Props = {
  providers: any;
  generalAnnouncements: Announcements;
};

const SignInScreen = ({ providers, generalAnnouncements }: Props) => {
  let result = [];
  for (let i = 0; i <= generalAnnouncements.length; i = i + 3) {
    result.push(generalAnnouncements.slice(i, i + 3));
  }
  return (
    <>
      <div className='mx-auto mt-6'>
        <div className='dark:bg-black bg-gray-100 text w-8/12 mx-auto my-4 border-cyan-600 border-2 p-2'>
          The Hanozi-Class platform is a complete Electronic Course Management System. Access to the service is done using a simple web browser.
        </div>
        <Tab.Group>
          <Tab.Panels>
            {result.map((res: any) => {
              return (
                <>
                  <Tab.Panel key={res.id}>
                    <AnnouncementsTable generalAnnouncements={res} />
                  </Tab.Panel>
                </>
              );
            })}{" "}
          </Tab.Panels>
          <Tab.List>
            {/* @ts-ignore */}
            {[...Array(3).keys()].map((num: number, i: number) => {
              return <PaginTab key={i}>{String(num + 1)}</PaginTab>;
            })}
          </Tab.List>
        </Tab.Group>

        {Object.values(providers).map((provider: any, i) => {
          return (
            <div key={i}>
              <Button variant={Variant.Google} onClick={() => signIn(provider.id)} className='flex mx-auto gap-2 my-6'>
                <Image width='25' height='25' src={googleSVG} alt='google logo' /> <div className='font-semibold'>Sign In With {provider.name}</div>
              </Button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SignInScreen;
