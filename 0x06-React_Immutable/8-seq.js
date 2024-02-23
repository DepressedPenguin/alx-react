import { seq } from "immutable";

// PRINTBEST STUDENT FUNCTION
export function printBestStudents(object) {
  const best = seq(object)
    .filter(student => student.score > 70)
    .map(student => ({
      ...student,
      firstName: student.firstName.charAt(0).toUpperCase() + student.firstName.slice(1),
      lastName: student.lastName.charAt(0).toUpperCase() + student.lastName.slice(1),
    }))
    .toObject();
  console.log(best);
}

const grades = {
  1: {
    score: 99,
    firstName: "guillaume",
    lastName: "salva",
  },
};

printBestStudents(grades);
