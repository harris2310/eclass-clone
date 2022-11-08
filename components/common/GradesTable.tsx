import React from "react";

type Props = { courses: Array<any> };

type Course = { name: "string"; grade: "string" };

function GradesTable({ courses }: Props) {
  return (
    <div>
      {" "}
      <div>
        <table className="shadow-sm table-fixed w-3/4 text-left my-8 mx-5 text-xl border-separate border-spacing-1">
          <thead className="bg-gray-200">
            <tr className="p-4">
              <th className="p-4">Class Name</th>
              <th className="p-4">Grade</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {courses.map((course: Course) => {
              return (
                <tr key={course.name + course.grade}>
                  <td className="p-4">{course.name}</td>
                  <td className="p-4">{course.grade}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default GradesTable;
