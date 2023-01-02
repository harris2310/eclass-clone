import React, { Fragment } from "react";
import { signOut } from "next-auth/react";
import { Tab } from "@headlessui/react";
import PaginTab from "../common/PaginTab";
import AnnouncementsTable from "../common/AnnouncementsTable";
import type { AnnouncementEach } from "types";

type Props = { generalAnnouncements: Array<AnnouncementEach> };

function HomeScreen({ generalAnnouncements }: Props) {
  let result = [];
  for (let i = 0; i <= generalAnnouncements.length; i = i + 3) {
    result.push(generalAnnouncements.slice(i, i + 3));
  }
  return (
    <div>
      <div className='text-xl my-2 p-4'>Pretty good</div>
      <Tab.Group>
        <Tab.Panels>
          {result.map((res) => {
            return (
              <>
                <Tab.Panel>
                  <AnnouncementsTable generalAnnouncements={res} />
                </Tab.Panel>
              </>
            );
          })}{" "}
        </Tab.Panels>
        <Tab.List>
          {/* @ts-ignore */}
          {[...Array(3).keys()].map((num: number) => {
            return <PaginTab key={num}>{String(num + 1)}</PaginTab>;
          })}
        </Tab.List>
      </Tab.Group>
    </div>
  );
}

export default HomeScreen;
