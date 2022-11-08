import React from "react";
import { Tab } from "@headlessui/react";
import GradesTable from "../common/GradesTable";
import { courses, term1, term2, term3 } from "../../utils/constants";

type Props = {};

const terms: Array<string> = ["Term 1", "Term 2", "Term 3"];

const GradesScreen = (props: Props) => {
  return (
    <Tab.Group>
      <Tab.List className="p-4 flex gap-4 mx-auto my-4 text-2xl font-semibold">
        {terms.map((term) => {
          return (
            <Tab key={term} className="hover:bg-slate-100 p-2">
              {term}
            </Tab>
          );
        })}
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>
          <GradesTable courses={term1} />
        </Tab.Panel>
        <Tab.Panel>
          <GradesTable courses={term2} />
        </Tab.Panel>
        <Tab.Panel>
          <GradesTable courses={term3} />
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
};

export default GradesScreen;
