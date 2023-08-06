export default function getStudentsByLocation(students, city) {
  return students.filter((arr) => arr.location === city);
}
//this code use the attay method filter under the condition of city function