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

function HomeScreen({}: Props) {
  const handleClick = () => {
    signOut();
  };
  return (
    <div>
      <div className="text-xl my-12 p-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Elementum nibh
        tellus molestie nunc non blandit massa. Quam lacus suspendisse faucibus
        interdum posuere lorem ipsum dolor. Varius quam quisque id diam vel quam
        elementum pulvinar etiam. Ante metus dictum at tempor commodo
        ullamcorper a lacus vestibulum. Fringilla est ullamcorper eget nulla
        facilisi etiam dignissim diam. Mattis vulputate enim nulla aliquet
        porttitor lacus luctus. Elementum facilisis leo vel fringilla.
        Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi
        tristique senectus et. Tristique senectus et netus et. Rhoncus urna
        neque viverra justo nec ultrices. Volutpat blandit aliquam etiam erat
        velit scelerisque in dictum. Nulla facilisi cras fermentum odio eu
        feugiat pretium nibh. Morbi enim nunc faucibus a pellentesque sit. Arcu
        non sodales neque sodales ut. Odio ut enim blandit volutpat maecenas
        volutpat blandit.
      </div>
      <Tab.Group>
        <Tab.Panels>
          {" "}
          <Tab.Panel>
            <AnnouncementsTable />
          </Tab.Panel>
          <Tab.Panel>
            {" "}
            <AnnouncementsTable />
          </Tab.Panel>
          <Tab.Panel>Content 3</Tab.Panel>
        </Tab.Panels>
        <Tab.List>
          <PaginTab num={1} />
          <PaginTab num={2} />
          <PaginTab num={3} />
          <PaginTab num={4} />
        </Tab.List>
      </Tab.Group>
    </div>
  );
}

export default HomeScreen;
