import React from "react";
import { signIn } from "next-auth/react";
import { dailyAnnouncements } from "../../utils/constants";
import Button from "../common/Button";
import { Variant } from "../common/Button";
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
        <div className="bg-gray-100 text-lg w-6/12 mx-auto my-3 border-orange-400 border-2 p-2">
          The eClass platform is a complete Electronic Course Management System.
          Access to the service is done using a simple web browser.
        </div>
        <table className="table-auto w-10/12 mx-auto border-separate p-2 border-spacing-y-4	border border-slate-400 ">
          <thead>
            <tr className="border border-slate-400">
              <th className="p-3 bg-slate-100">Daily Announcements</th>
            </tr>
          </thead>
          <tbody>
            {dailyAnnouncements.map((ann: announcements) => {
              return (
                <tr key={ann.title}>
                  <td className="border border-slate-200 p-3  gap-4">
                    <div className="inline-block">{ann.title}</div>
                    <div className="text-xs inline ml-3">{ann.date}</div>
                    <div className="text-sm">{ann.announcement}</div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {Object.values(providers).map((provider: any, i) => {
          return (
            <div key={i}>
              <Button
                variant={Variant.Google}
                onClick={() => signIn(provider.id)}
                className="flex mx-auto gap-2 my-16"
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
