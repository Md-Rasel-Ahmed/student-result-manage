import React from "react";
import { toast } from "react-toastify";
import useStudents from "./Hook/useStudents";

const DeleteStudent = ({ id }) => {
  const [students] = useStudents();
  const findStudent = students.find((student) => student._id === id);
  const removeStudent = async () => {
    await fetch(`http://localhost:5000/students/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Student Delete Successful");
      });
  };
  return (
    <div>
      <input type="checkbox" id="delete" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box relative">
          <label
            for="delete"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="text-lg font-bold">
            <h2 className="text-lg font-bold">Remove Student</h2>
          </h3>
          <hr />
          <p class="py-4">
            Are you sure you want to remove the current student from the list?
          </p>
          <h4>Student Name</h4>
          <strong>{findStudent?.studentName}</strong>
          <h3>Class</h3>
          <strong>{findStudent?.studentClass}th</strong>
          <div>
            <button onClick={removeStudent} className="btn btn-block w-96 mt-3">
              CONFIRM
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteStudent;
