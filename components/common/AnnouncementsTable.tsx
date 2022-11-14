import Link from "next/link";
import React from "react";

type Props = {
  generalAnnouncements: Array<Object>;
};

function AnnouncementsTable({ generalAnnouncements }: Props) {
  return (
    <>
      <table className="table-auto w-10/12 mx-auto border-separate p-2 border-spacing-y-4	border border-slate-400 ">
        <thead>
          <tr className="border border-slate-400">
            <th className="p-3 bg-slate-100">Daily Announcements</th>
          </tr>
        </thead>
        <tbody>
          {generalAnnouncements.map((ann: any) => {
            return (
              <tr key={ann.title}>
                <td className="border border-slate-200 p-3  gap-4">
                  <Link href="/announcements/general/[ann.title]">
                    <div className="inline-block">{ann.title}</div>
                  </Link>
                  <div className="text-sm inline ml-3">
                    {ann.date.substring(0, 10)}
                  </div>
                  <div className="text-sm">{ann.content}</div>
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
