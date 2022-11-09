import React from "react";
import { Tab } from "@headlessui/react";
import GradesTable from "../common/GradesTable";

type Props = {
  grades: Array<{
    name: string;
    grade: string;
    term: number;
  }>;
};

const terms: Array<string> = ["Term 1", "Term 2", "Term 3"];

const GradesScreen = ({ grades }: Props) => {
  const term1 = grades.filter((grade) => grade.term == 1);
  const term2 = grades.filter((grade) => grade.term == 2);
  const term3 = grades.filter((grade) => grade.term == 3);
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
          <GradesTable courses={term1} />;
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
