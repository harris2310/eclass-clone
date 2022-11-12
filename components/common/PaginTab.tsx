import React, { Fragment } from "react";
import { Tab } from "@headlessui/react";

type Props = { children: string };

const PaginTab = ({ children }: Props) => {
  return (
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
          {children}
        </button>
      )}
    </Tab>
  );
};

export default PaginTab;
