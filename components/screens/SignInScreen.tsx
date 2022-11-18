import React from "react";
import { signIn } from "next-auth/react";
import Button from "../common/Button";
import { Variant } from "../common/Button";
import { Tab } from "@headlessui/react";
import PaginTab from "../common/PaginTab";
import AnnouncementsTable from "../common/AnnouncementsTable";
import Image from "next/image";
import googleSVG from "../../assets/google_icon.svg";

type Props = {
  providers: any;
  generalAnnouncements: Array<Object>;
};

const SignInScreen = ({ providers, generalAnnouncements }: Props) => {
  let result = [];
  for (let i = 0; i <= generalAnnouncements.length; i = i + 3) {
    result.push(generalAnnouncements.slice(i, i + 3));
  }
  return (
    <>
      <div className='mx-auto mt-6'>
        <div className='bg-gray-100 text w-8/12 mx-auto my-4 border-cyan-600 border-2 p-2'>
          The eClass platform is a complete Electronic Course Management System. Access to the service is done using a simple web browser.
        </div>
        <Tab.Group>
          <Tab.Panels>
            {" "}
            <Tab.Panel>
              <AnnouncementsTable generalAnnouncements={result[0]} />
            </Tab.Panel>
            <Tab.Panel>
              {" "}
              <AnnouncementsTable generalAnnouncements={result[1]} />
            </Tab.Panel>
            <Tab.Panel>Content 3</Tab.Panel>
          </Tab.Panels>
          <Tab.List>
            <PaginTab>1</PaginTab>
            <PaginTab>2</PaginTab>
            <PaginTab>3</PaginTab>
          </Tab.List>
        </Tab.Group>

        {Object.values(providers).map((provider: any, i) => {
          return (
            <div key={i}>
              <Button variant={Variant.Google} onClick={() => signIn(provider.id)} className='flex mx-auto gap-2 my-16'>
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
