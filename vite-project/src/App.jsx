import { useEffect, useState } from 'react';
import HeaderLogo from "./components/Header";
import Rights from "./components/Footer";
import studentsData from "./data/students";
import StudentsTable from "./components/Dashboard";
import AddStudent from "./components/AddStudent";
import Login from "./components/LoginForm";
import Register from "./components/RegisterForm";
import { userService } from "./services/userService.js";
import { storageService } from "./services/storageService.js";

function App() {
  const [students, setStudents] = useState(studentsData);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [showRegister, setShowRegister] = useState(false);

  useEffect(() => {
    const loggedInUser = storageService.getLoggedInUser();
    console.log({ loggedInUser });

    if (loggedInUser) {
      setLoggedInUser(loggedInUser);
    }
  }, []);

  const handleAuth = (username, password, isRegister = false, email = "") => {
    if (isRegister) {
      // register
      userService.createUser(username, email, password);
      setShowRegister(false);
    } else {
      // login
      const user = userService.login(username, password);
      if (!user) {
        alert("Invalid credentials");
        setShowRegister(true);
        return;
      }
      setLoggedInUser(user);
    }
  };

  const handleLogout = () => {
    userService.logout();
    setLoggedInUser(null);
  };

  const handleAddStudent = (newStudent) => {
    setStudents((prevStudents) => [...prevStudents, { id: prevStudents.length + 1, ...newStudent }]);
  };

  return (
    <>
      <HeaderLogo onLogout={handleLogout} />
      {!loggedInUser ? (
        showRegister ? (
          <Register handleAuth={handleAuth} setShowRegister={setShowRegister} />
        ) : (
          <Login handleAuth={handleAuth} setShowRegister={setShowRegister} />
        )
      ) : (
        <>
          <AddStudent onAddStudent={handleAddStudent} />
          <StudentsTable students={students} onStudentDelete={setStudents} />
        </>
      )}
      <Rights />
    </>
  );
}

export default App;
