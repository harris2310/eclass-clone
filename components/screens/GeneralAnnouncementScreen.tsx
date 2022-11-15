import React from "react";

type Props = {
  announcement: { id: number; date: string; title: string; content: string };
};

function GeneralAnnouncementScreen({ announcement }: Props) {
  return (
    <div className="mx-auto mt-6 w-8/12">
      <div className="bg-gray-100 w-full mx-auto my-8 border-cyan-600 border-2 p-6">
        <div className="font-bold my-2 text-xl">{announcement.title}</div>
        <div className="text-cyan-700 my-2">
          {announcement.date.slice(0, 10)}
        </div>
        <div className="mt-12 text-lg">{announcement.content}</div>
      </div>
    </div>
  );
}

export default GeneralAnnouncementScreen;
