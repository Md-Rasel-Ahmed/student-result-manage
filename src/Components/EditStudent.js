import React, { useState } from "react";
import { toast } from "react-toastify";
import useStudents from "./Hook/useStudents";

const EditStudent = ({ id }) => {
  const [students] = useStudents();
  const [name, setName] = useState("");
  const [score, setScore] = useState(0);

  const editStudent = async (e) => {
    e.preventDefault();
    let studentName = e.target.studentName.value;
    let score = parseInt(e.target.score.value);
    let studentClass = e.target.class.value;
    let grade = "";
    let result = "";
    score >= 20 ? (grade = " Excellent") : (grade = "Poor");
    score >= 20 ? (result = "Passed") : (result = "Failed ");
    const studentInfo = { studentName, studentClass, grade, score, result };

    await fetch(`http://localhost:5000/students/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(studentInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Edit successed!");
      });
  };

  return (
    <div className="">
      <div>
        <input type="checkbox" id="edit" class="modal-toggle" />
        <div class="modal ">
          <div class="modal-box relative">
            <label
              for="edit"
              class="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <h3 class="text-lg font-bold">Edit Student</h3>
            <form onSubmit={editStudent} className="w-80 py-5">
              <div>
                <label htmlFor="studentName">STUDENT NAME *</label>
                <input
                  required
                  type="text"
                  name="studentName"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  class="input input-bordered mt-3 block w-96 "
                />
              </div>

              <div className="mt-2">
                <label htmlFor="">CLASS *</label>
                <input
                  type="number"
                  required
                  name="class"
                  min="1"
                  max="12"
                  class="input input-bordered mt-3 block  w-96"
                />
              </div>
              <div className="mt-2">
                <label htmlFor="score">SCORE *</label>
                <input
                  onChange={(e) => setScore(e.target.value)}
                  type="number"
                  name="score"
                  required
                  min="0"
                  max="100"
                  class="input input-bordered mt-3 block  w-96"
                />
              </div>
              <div className="result mt-2">
                <h2 className="font-bold">RESULT</h2>
                <span
                  className={`${score >= 20 ? "text-success" : "text-error"}`}
                >
                  {score >= 20 ? "Passed" : "Failed"}
                </span>
              </div>
              <div className="grade">
                <h2 className="font-bold">GRADE</h2>
                <span
                  name="span"
                  className={`${score >= 20 ? "text-success" : "text-error"}`}
                >
                  {score >= 20 ? "Excellent" : "Poor"}
                </span>
              </div>
              <button className="btn btn-block w-96 mt-2" type="submit">
                CONFIRM
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditStudent;
