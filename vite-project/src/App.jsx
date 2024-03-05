import { useState } from 'react';
import HeaderLogo from "./components/Header";
import Rights from "./components/Footer";
import studentsData from "./data/students";
import StudentsTable from "./components/Dashboard";
import AddStudent from "./components/AddStudent";

function App() {
  const [students, setStudents] = useState(studentsData);

  const handleAddStudent = (newStudent) => {
    setStudents((prevStudents) => [...prevStudents, { id: prevStudents.length + 1, ...newStudent }]);
  };

  return (
    <>
      <HeaderLogo />
      <AddStudent onAddStudent={handleAddStudent} />
      <StudentsTable students={students} onStudentDelete={setStudents} />
      <Rights />
    </>
  );
}

export default App;
