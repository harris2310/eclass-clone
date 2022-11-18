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
  const handleClick = () => {
    signOut();
  };
  return (
    <div>
      <div className='text-xl my-12 p-4'>Pretty good</div>
      <Tab.Group>
        <Tab.Panels>
          {" "}
          <Tab.Panel>
            <AnnouncementsTable generalAnnouncements={generalAnnouncements} />
          </Tab.Panel>
          <Tab.Panel>
            {" "}
            <AnnouncementsTable generalAnnouncements={generalAnnouncements} />
          </Tab.Panel>
          <Tab.Panel>Content 3</Tab.Panel>
        </Tab.Panels>
        <Tab.List>
          <PaginTab>1</PaginTab>
          <PaginTab>2</PaginTab>
          <PaginTab>3</PaginTab>
          <PaginTab>4</PaginTab>
        </Tab.List>
      </Tab.Group>
    </div>
  );
}

export default HomeScreen;
