import React from "react";

type Props = {
  course: { id: number; term: number; description: string; name: string; open: boolean };
};

function CourseEachScreen({ course }: Props) {
  return (
    <div className='mx-auto mt-6 w-8/12'>
      <div className='bg-gray-100 w-full mx-auto my-8 border-cyan-600 border-2 p-6'>
        <div className='font-bold my-2 text-xl'>{course.name}</div>
        <div className='text-cyan-700 my-2'>Term: {course.term}</div>
        <div className='mt-12 text-lg'>{course.description}</div>
      </div>
    </div>
  );
}

export default CourseEachScreen;
