import React from "react";

type Courses = {
  courses: Array<{
    id: string;
    name: string;
    term: number;
    description: string;
    open: boolean;
  }>;
};

function CoursesScreen({ courses }: Courses) {
  return (
    <div>
      <table className="shadow-sm table-fixed w-3/5 text-left my-8 mx-8 text-lg border-separate border-spacing-1">
        <thead className="bg-gray-200">
          <tr className="p-2">
            <th className="p-2 w-10/12">Class Name</th>
            <th className="p-2">Term</th>
            <th className="p-2">Type</th>
          </tr>
        </thead>
        <tbody className="bg-white ">
          {courses.map((course) => {
            return (
              <tr key={course.name}>
                <td className="p-2">
                  <div>{course.name}</div>
                </td>
                <td className="p-2">
                  <div>{course.term}</div>
                </td>
                <td className="p-2">
                  <div>
                    {course.open == true ? <div>OPEN</div> : <div>CLOSED</div>}
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default CoursesScreen;
