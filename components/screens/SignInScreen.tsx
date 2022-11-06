import React from "react";
import { signIn } from "next-auth/react";
import { dailyAnnouncements } from "../../utils/constants";

type announcements = {
  title: string;
  date: string;
  announcement: string;
};

const SignInScreen = ({ providers }: any) => {
  return (
    <>
      <h1 className="my-16 font-bold text-black">Welcome to E class</h1>
      {Object.values(providers).map((provider: any, i) => {
        return (
          <div key={i}>
            <button
              className="w-15 m-auto bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-blue-700 hover:border-blue-500 rounded"
              onClick={() => signIn(provider.id)}
            >
              Sign In With {provider.name}
            </button>
          </div>
        );
      })}
      <div className="bg-red-200 text-lg w-6/12 mx-auto my-5 border-orange-400 border-2 p-2">
        The DUTHNET eClass platform is a complete Electronic Course Management
        System. Access to the service is done using a simple web browser without
        the need for external
      </div>
      <div className=" w-max mx-auto mt-16">
        <table className="table-auto w-full border-separate p-2 border-spacing-y-4	border border-slate-400 ">
          <thead>
            <tr className="border border-slate-400">
              <th className="p-3 bg-slate-100">Daily Announcements</th>
            </tr>
          </thead>
          <tbody>
            {dailyAnnouncements.map((ann: announcements) => {
              return (
                <tr key={ann.title}>
                  <td className="border border-slate-200 p-3 flex flex-col gap-4">
                    {ann.title}
                    <div className="text-xs">{ann.date}</div>
                    <div className="text-sm">{ann.announcement}</div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default SignInScreen;
