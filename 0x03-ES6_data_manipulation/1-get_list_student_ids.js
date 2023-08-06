export default function getListStudentIds(arr) {
  if (!Array.isArray(arr)) {
    return []; // ifvthe array is empty it returns an empty array
  }
  return arr.map((arr) => arr.id);// creates new array extracting yhe IDs of objects arrays
}
