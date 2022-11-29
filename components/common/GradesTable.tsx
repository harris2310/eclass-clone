import React from "react";

type Props = { grades: Array<any> };

function GradesTable({ grades }: Props) {
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
                  <td className='p-4'>{grade.course.name}</td>
                  <td className='p-4'>
                    {grades.map((grade) => (
                      <div key={grade.grade.grade + grade.courseId}>
                        <div className={grade.grade.grade >= 5 ? "text-green-600" : "text-red-600"}>{grade.grade.grade !== null ? <div>{grade.grade.grade}</div> : <div>-</div>}</div>
                      </div>
                    ))}
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
