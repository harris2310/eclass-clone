import React from "react";
import { signIn } from "next-auth/react";
import { dailyAnnouncements } from "../../utils/constants";
import Button from "../common/Button";
import { Variant } from "../common/Button";
import { Tab } from "@headlessui/react";
import { Fragment } from "react";
import AnnouncementsTable from "../common/AnnouncementsTable";
import Image from "next/image";
import googleSVG from "../../assets/google_icon.svg";

type announcements = {
  title: string;
  date: string;
  announcement: string;
};

const SignInScreen = ({ providers }: any) => {
  return (
    <>
      <div className="mx-auto mt-6">
        <div className="bg-gray-100 text-lg w-6/12 mx-auto my-16 border-cyan-600 border-2 p-2">
          The eClass platform is a complete Electronic Course Management System.
          Access to the service is done using a simple web browser.
        </div>
        <Tab.Group>
          <Tab.Panels>
            {" "}
            <Tab.Panel>
              <table className="table-auto w-10/12 mx-auto border-separate p-2 border-spacing-y-0	 border-slate-400 ">
                <thead>
                  <tr>
                    <th className="p-3 border border-slate-200 bg-slate-100">
                      Daily Announcements
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {dailyAnnouncements.map((ann: announcements) => {
                    return (
                      <tr key={ann.title}>
                        <td className="border border-slate-200 p-3  gap-4">
                          <div className="inline-block">{ann.title}</div>
                          <div className="text-sm inline ml-3">{ann.date}</div>
                          <div className="text-sm">{ann.announcement}</div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </Tab.Panel>
            <Tab.Panel>Content 2</Tab.Panel>
            <Tab.Panel>Content 3</Tab.Panel>
          </Tab.Panels>
          <Tab.List>
            <Tab as={Fragment}>
              {({ selected }) => (
                /* Use the `selected` state to conditionally style the selected tab. */
                <button
                  className={
                    selected
                      ? " p-2 m-2 bg-cyan-600 text-white focus:none"
                      : " text-black p-2 m-2 border border-grey-400"
                  }
                >
                  1
                </button>
              )}
            </Tab>
            <Tab as={Fragment}>
              {({ selected }) => (
                /* Use the `selected` state to conditionally style the selected tab. */
                <button
                  className={
                    selected
                      ? " p-2 m-2 bg-cyan-600 text-white"
                      : " text-black p-2 m-2 border border-grey-400"
                  }
                >
                  2
                </button>
              )}
            </Tab>
            <Tab as={Fragment}>
              {({ selected }) => (
                /* Use the `selected` state to conditionally style the selected tab. */
                <button
                  className={
                    selected
                      ? " p-2 m-2 bg-cyan-600 text-white"
                      : " text-black p-2 m-2 border border-grey-400"
                  }
                >
                  3
                </button>
              )}
            </Tab>
          </Tab.List>
        </Tab.Group>

        {Object.values(providers).map((provider: any, i) => {
          return (
            <div key={i}>
              <Button
                variant={Variant.Google}
                onClick={() => signIn(provider.id)}
                className="flex mx-auto gap-2 my-20"
              >
                <Image
                  width="25"
                  height="25"
                  src={googleSVG}
                  alt="google logo"
                />{" "}
                <div className="font-semibold">
                  Sign In With {provider.name}
                </div>
              </Button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SignInScreen;
