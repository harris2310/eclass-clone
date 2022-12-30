import React from "react";
import Link from "next/link";
import type { Grades } from "types";

function GradesTable({ grades }: Grades) {
  return (
    <div>
      {" "}
      <div>
        <table className='shadow-sm table-fixed w-3/4 text-left my-2 mx-5 text-xl border-separate border-spacing-1'>
          <thead className='bg-gray-200'>
            <tr className='p-4'>
              <th className='p-4'>Class Name</th>
              <th className='p-4'>Grade</th>
            </tr>
          </thead>
          <tbody className='bg-white'>
            {grades.map((grade) => {
              return (
                <tr key={grade.course.id + grade.course.term}>
                  <td className='text-blue-500 hover:text-blue-800 p-4'>
                    <Link href={`/courses/${grade.course.id}`}>{grade.course.name}</Link>
                  </td>
                  <td className='p-4'>
                    <div key={grade.grade.grade + grade.course.id}>
                      <div className={grade.grade.grade >= 5 ? "text-green-600" : "text-red-600"}>{grade.grade.grade !== 0 ? <div>{grade.grade.grade}</div> : <div className='text-black'>-</div>}</div>
                    </div>
                  </td>
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
