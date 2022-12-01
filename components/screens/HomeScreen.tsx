import React, { Fragment } from "react";
import { signOut } from "next-auth/react";
import { Tab } from "@headlessui/react";
import PaginTab from "../common/PaginTab";
import AnnouncementsTable from "../common/AnnouncementsTable";

type Props = {};

type announcements = {
  title: string;
  date: string;
  announcement: string;
};

function HomeScreen({ generalAnnouncements }: any) {
  let result = [];
  for (let i = 0; i <= generalAnnouncements.length; i = i + 3) {
    result.push(generalAnnouncements.slice(i, i + 3));
  }
  return (
    <div>
      <div className='text-xl my-2 p-4'>Pretty good</div>
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
          <Tab.Panel>
            {" "}
            <AnnouncementsTable generalAnnouncements={result[2]} />
          </Tab.Panel>
        </Tab.Panels>
        <Tab.List>
          <PaginTab>1</PaginTab>
          <PaginTab>2</PaginTab>
          <PaginTab>3</PaginTab>
        </Tab.List>
      </Tab.Group>
    </div>
  );
}

export default HomeScreen;
