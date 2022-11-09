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
      {courses.map((course) => {
        return (
          <div key={course.name}>
            <div className="flex gap-3">
              <div>{course.name}</div>
              <div>{course.term}</div>
              {course.open == true ? <div>Open</div> : <div>Closed</div>}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CoursesScreen;
