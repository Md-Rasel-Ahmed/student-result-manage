import React, { useState } from "react";
import { toast } from "react-toastify";
import handleAdd from "./handleAdd";

const AddStudent = () => {
  const [score, setScore] = useState(0);
  const [rasel, setRasel] = useState("");
  // adding student
  const addStudent = async (e) => {
    e.preventDefault();
    handleAdd(e);
    toast.success("Student added successfully");
  };

  return (
    <div>
      {/* Modal for Adding a single student */}

      <input type="checkbox" id="addStudent" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box relative">
          <label
            for="addStudent"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="text-lg font-bold">Add Student</h3>
          <form onSubmit={addStudent} className="w-80 py-5">
            <div>
              <label htmlFor="studentName">STUDENT NAME *</label>
              <input
                required
                type="text"
                name="studentName"
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
              <label htmlFor="">SCORE *</label>
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
      {/* modal end for adding students */}
    </div>
  );
};

export default AddStudent;
