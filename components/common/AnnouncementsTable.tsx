import Link from "next/link";
import React from "react";

type Props = {
  generalAnnouncements: Array<Object>;
};

function AnnouncementsTable({ generalAnnouncements }: Props) {
  return (
    <>
      <table className='table-auto w-8/12 mx-auto border-separate border-spacing-y-4 border-slate-400 '>
        <thead>
          <tr className='border border-slate-400'>
            <th className='p-3 bg-gray-200'>Daily Announcements</th>
          </tr>
        </thead>
        <tbody>
          {generalAnnouncements.map((ann: any) => {
            return (
              <tr key={ann.title}>
                <td className='border border-slate-200 p-3  gap-4'>
                  <Link href={"/announcements/general/" + ann.id}>
                    <div className='inline-block text-lg text-blue-400 hover:text-blue-800'>{ann.title}</div>
                  </Link>
                  <div className='text-sm inline ml-3'>{ann.date.substring(0, 10)}</div>
                  <div className='text-sm'>{ann.content.substring(0, 70)}...</div>
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
