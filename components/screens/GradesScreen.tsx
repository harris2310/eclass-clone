import React from "react";
import { Tab } from "@headlessui/react";
import GradesTable from "../common/GradesTable";

type Props = {};

const GradesScreen = (props: Props) => {
  return (
    <Tab.Group>
      <Tab.List className="flex gap-4 mx-auto text-2xl font-semibold bg-red-50 border border-orange-100">
        <Tab className="hover:bg-slate-200">Year 1</Tab>
        <Tab className="hover:bg-slate-200">Year 2</Tab>
        <Tab className="hover:bg-slate-200">Year 3</Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>
          <GradesTable />
        </Tab.Panel>
        <Tab.Panel>
          <GradesTable />
        </Tab.Panel>
        <Tab.Panel>
          <GradesTable />
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
};

export default GradesScreen;
