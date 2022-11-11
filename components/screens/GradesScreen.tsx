import React from "react";
import { Tab } from "@headlessui/react";
import GradesTable from "../common/GradesTable";

type Props = {
  grades: Array<{
    courseId: number;
    studentId: number;
    grade: number;
  }>;
  courses: Array<{
    id: number;
    name: string;
    term: number;
    description: string;
    open: boolean;
  }>;
};

const terms: Array<string> = ["Term 1", "Term 2", "Term 3"];

const GradesScreen = ({ grades, courses }: Props) => {
  const term1 = courses.filter((course) => course.term == 1);
  const term2 = courses.filter((course) => course.term == 2);
  const term3 = courses.filter((course) => course.term == 3);
  console.log(term1);
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
          <GradesTable courses={term1} grades={grades} />;
        </Tab.Panel>
        <Tab.Panel>
          <GradesTable courses={term2} grades={grades} />
        </Tab.Panel>
        <Tab.Panel>
          <GradesTable courses={term3} grades={grades} />
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
};

export default GradesScreen;
