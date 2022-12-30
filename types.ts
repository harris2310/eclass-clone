type Grades = {
  grades: Array<{
    course: {
      id: number;
      name: string;
      term: number;
      description: string;
      open: boolean;
    };
    grade: { grade: number };
  }>;
};

type Courses = {
  courses: Array<{
    id: number;
    name: string;
    term: number;
    description: string;
    open: boolean;
  }>;
};

type CourseEach = {
  course: {
    id: number;
    term: number;
    description: string;
    name: string;
    open: boolean;
    announcements: Array<Object>;
  };
};

type Account = {
  student: {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    year: number;
    birthPlace: string;
  };
};

type AnnouncementEach = {
  announcement: {
    id: number;
    date: string;
    title: string;
    content: string;
  };
};

export type { Grades, Courses, CourseEach, Account, AnnouncementEach };
