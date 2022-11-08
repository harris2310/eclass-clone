import React from "react";
import { courses } from "../../utils/constants";

type Props = {};

function CoursesScreen({}: Props) {
  return (
    <div>
      {courses.map((course) => {
        return (
          <div key={course.name}>
            <div>
            <div>{course.name}</div>
          </div>
        );
      })}
    </div>
  );
}

export default CoursesScreen;
