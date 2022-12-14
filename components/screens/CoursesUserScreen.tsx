import React from "react";
import Link from "next/link";

type Props = {
  courses: Array<{
    id: number;
    name: string;
    term: number;
    description: string;
    open: boolean;
  }>;
};

function CoursesUserScreen({ courses }: Props) {
  return (
    <div>
      {" "}
      <div>
        <table className='shadow-sm table-fixed w-3/5 text-left my-8 mx-8 border-separate border-spacing-1'>
          <thead className='bg-gray-200'>
            <tr className='p-2'>
              <th className='p-2 w-10/12'>Class Name</th>
              <th className='p-2'>Term</th>
            </tr>
          </thead>
          <tbody className='bg-white '>
            {courses
              .filter((courseFilt) => courseFilt.id !== 1000)
              .map((course) => {
                return (
                  <tr key={course.name}>
                    <td className='p-2'>
                      <div className='text-blue-500 hover:text-blue-800'>
                        <Link href={`/courses/${course.id}`}>{course.name}</Link>
                      </div>
                    </td>
                    <td className='p-2'>
                      <div>{course.term}</div>
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

export default CoursesUserScreen;
