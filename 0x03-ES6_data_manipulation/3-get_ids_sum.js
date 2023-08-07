export default function getStudentIdsSum(arr){
  return arr.reduce((acc, cur) => acc + cur.id ,0)
}