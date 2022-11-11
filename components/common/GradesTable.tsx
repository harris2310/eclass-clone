import React from "react";

type Props = { grades: Array<any> };

type Course = { courseId: number; grade: number; studentId: number }[];

function GradesTable({ grades }: Props) {
  return (
    <div>
      {" "}
      <div>
        <table className="shadow-sm table-fixed w-3/4 text-left my-2 mx-5 text-xl border-separate border-spacing-1">
          <thead className="bg-gray-200">
            <tr className="p-4">
              <th className="p-4">Class Name</th>
              <th className="p-4">Grade</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {grades.map(
              (grade: {
                courseId: number;
                grade: number;
                studentId: number;
              }) => {
                return (
                  <tr key={grade.courseId + grade.grade}>
                    <td className="p-4">{grade.studentId}</td>
                    <td className="p-4">{grade.grade}</td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default GradesTable;
