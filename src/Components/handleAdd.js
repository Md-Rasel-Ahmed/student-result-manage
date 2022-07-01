// adding student
const handleAdd = async (e) => {
  let studentName = e.target.studentName.value;
  let score = parseInt(e.target.score.value);
  let studentClass = e.target.class.value;
  let grade = "";
  let result = "";
  score >= 20 ? (grade = " Excellent") : (grade = "Poor");
  score >= 20 ? (result = "Passed") : (result = "Failed ");
  const studentInfo = { studentName, studentClass, grade, score, result };

  await fetch("http://localhost:5000/students", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(studentInfo),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));

  console.log(studentInfo);
};
export default handleAdd;
