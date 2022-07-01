import logo from "./logo.svg";
import "./App.css";
import AllStudents from "./Components/AllStudents";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div>
      <AllStudents></AllStudents>
      <ToastContainer />
    </div>
  );
}

export default App;
