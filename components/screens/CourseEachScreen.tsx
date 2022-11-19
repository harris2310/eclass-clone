import React from "react";

type Props = {
  course: { id: number; term: number; description: string; name: string; open: boolean };
};

function CourseEachScreen({ course }: Props) {
  return (
    <div className='flex flex-col gap-7 text-lg p-8'>
      <div>{course.name}</div>
      <div>Description: {course.description}</div>
      <div>Term: {course.term}</div>
    </div>
  );
}

export default CourseEachScreen;
