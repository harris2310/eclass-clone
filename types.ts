type Grades = Array<{
  course: {
    id: number;
    name: string;
    term: number;
    description: string;
    open: boolean;
  };
  grade: { grade: number };
}>;

type Courses = Array<CourseEach>;

type CourseEach = {
  id: number;
  term: number;
  description: string;
  name: string;
  open: boolean;
  announcements: Announcements;
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
  id: number;
  date: string;
  title: string;
  content: string;
};

type Announcements = Array<AnnouncementEach>;

export type { Grades, Courses, CourseEach, Account, AnnouncementEach, Announcements };
