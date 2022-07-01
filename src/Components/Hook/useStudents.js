import { useEffect, useState } from "react";

function useStudents() {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/students")
      .then((res) => res.json())
      .then((data) => setStudents(data));
  }, []);

  return [students];
}

export default useStudents;
