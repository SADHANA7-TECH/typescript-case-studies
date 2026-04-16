type Instructor = { id: string; coursesTaught: number };
type Admin = { id: string; accessLevel: "basic" | "super" };

type InstructorOrAdmin = Instructor | Admin;


type Assignment = {
  title: string;
  dueDate: Date;
  points: number;
};

type ReadonlyAssignment = Readonly<Assignment>;
const assignment1: ReadonlyAssignment = {
  title: "Math",
  dueDate: new Date(),
  points: 100
};

const assignment2: ReadonlyAssignment = {
  title: "Science",
  dueDate: new Date(),
  points: 23
};

type LearnerStats = {
  quizzes: number;
  videos: number;
  assignments: number;
};
type StatsAsStrings = {
  [K in keyof LearnerStats]: string;
};
export {};