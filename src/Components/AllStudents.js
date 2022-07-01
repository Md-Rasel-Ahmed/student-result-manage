import React, { useEffect, useState } from "react";
import AddStudent from "./AddStudent";
import DeleteStudent from "./DeleteStudent";
import EditStudent from "./EditStudent";

const AllStudents = () => {
  const [students, setStudents] = useState([]);
  const [id, setId] = useState("");
  useEffect(() => {
    fetch("http://localhost:5000/students")
      .then((res) => res.json())
      .then((data) => setStudents(data));
  }, [students]);

  return (
    <div>
      <h1 align="center" className="text-xl p-2 font-bold">
        All Students
      </h1>
      {/* Modal button fot adding student */}
      <label for="addStudent" class="btn modal-button m-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
        ADD
      </label>

      <div class="overflow-x-auto">
        <table class="table table-compact w-full">
          <thead>
            <tr>
              <th>No</th>
              <th>Student Name</th>
              <th>Class</th>
              <th>Result</th>
              <th>Score</th>
              <th>Grade</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* mapping all students */}
            {students?.map((student) => {
              return (
                <tr key={student._id}>
                  <th>1</th>
                  <td>{student.studentName}</td>
                  <td>{student.studentClass}th</td>
                  <td>
                    <a
                      className={`text-white p-1 rounded ${
                        student.result === "Passed" ? "bg-success" : "bg-error"
                      }`}
                      href="#"
                    >
                      {student.result}
                    </a>
                  </td>
                  <td>{student.score}/100</td>
                  <td
                    className={
                      student.grade === " Excellent"
                        ? "text-success"
                        : "text-error"
                    }
                  >
                    {student.grade}
                  </td>
                  <td>
                    <label
                      onClick={() => setId(student._id)}
                      for="edit"
                      class="btn btn-link modal-button"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                        />
                      </svg>
                    </label>

                    <label
                      onClick={() => setId(student._id)}
                      for="delete"
                      class="btn modal-button btn-link text-error"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </label>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <EditStudent id={id} />
      <DeleteStudent id={id} />
      <AddStudent />
    </div>
  );
};

export default AllStudents;
