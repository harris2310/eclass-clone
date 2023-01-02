import React from "react";
import { Tab } from "@headlessui/react";
import GradesTable from "../common/GradesTable";
import type { Grades } from "types";

const terms: Array<string> = ["Term 1", "Term 2", "Term 3", "Term 4"];

const GradesScreen = ({ grades }: { grades: Grades }) => {
  for (let i = 0; i <= grades.length; i++) {}
  const term1 = grades.filter((grade) => grade.course.term == 1);
  const term2 = grades.filter((grade) => grade.course.term == 2);
  const term3 = grades.filter((grade) => grade.course.term == 3);
  const term4 = grades.filter((grade) => grade.course.term == 4);
  return (
    <Tab.Group>
      <Tab.List className='p-4 flex gap-4 mx-auto my-4 text-2xl font-semibold'>
        {terms.map((term) => {
          return (
            <Tab key={term} className='hover:bg-slate-100 p-2'>
              {term}
            </Tab>
          );
        })}
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>
          <GradesTable grades={term1} />
        </Tab.Panel>
        <Tab.Panel>
          <GradesTable grades={term2} />
        </Tab.Panel>
        <Tab.Panel>
          <GradesTable grades={term3} />
        </Tab.Panel>
        <Tab.Panel>
          <GradesTable grades={term4} />
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
};

export default GradesScreen;
