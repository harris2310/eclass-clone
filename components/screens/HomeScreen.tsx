import React, { Fragment } from "react";
import { signOut } from "next-auth/react";
import { dailyAnnouncements } from "../../utils/constants";
import { Tab } from "@headlessui/react";

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
            <table className="table-auto w-10/12 mx-auto border-separate p-2 border-spacing-y-0	 border-slate-400 ">
              <thead>
                <tr>
                  <th className="p-3 border border-slate-200 bg-slate-100">
                    Daily Announcements
                  </th>
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
          </Tab.Panel>
          <Tab.Panel>Content 2</Tab.Panel>
          <Tab.Panel>Content 3</Tab.Panel>
        </Tab.Panels>
        <Tab.List>
          <Tab as={Fragment}>
            {({ selected }) => (
              /* Use the `selected` state to conditionally style the selected tab. */
              <button
                className={
                  selected
                    ? " p-2 m-2 bg-cyan-600 text-white focus:none"
                    : " text-black p-2 m-2 border border-grey-400"
                }
              >
                1
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              /* Use the `selected` state to conditionally style the selected tab. */
              <button
                className={
                  selected
                    ? " p-2 m-2 bg-cyan-600 text-white"
                    : " text-black p-2 m-2 border border-grey-400"
                }
              >
                2
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              /* Use the `selected` state to conditionally style the selected tab. */
              <button
                className={
                  selected
                    ? " p-2 m-2 bg-cyan-600 text-white"
                    : " text-black p-2 m-2 border border-grey-400"
                }
              >
                3
              </button>
            )}
          </Tab>
        </Tab.List>
      </Tab.Group>
    </div>
  );
}

export default HomeScreen;
