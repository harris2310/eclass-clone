import React from "react";
import { dailyAnnouncements } from "../../utils/constants";

type Props = {};

type announcements = {
  title: string;
  date: string;
  announcement: string;
};

function AnnouncementsTable({}: Props) {
  return (
    <>
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
                  <div className="text-sm inline ml-3">{ann.date}</div>
                  <div className="text-sm">{ann.announcement}</div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default AnnouncementsTable;
