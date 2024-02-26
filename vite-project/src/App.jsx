import HeaderLogo from "./components/Header"
import Rights from "./components/Footer"
import students from "./data/students"
import StudentsTable from "./components/Dashboard"

function App() {
  return (
    <>
    <HeaderLogo/>
    <StudentsTable/>
    <Rights/>
    </>
  )
}

export default App
