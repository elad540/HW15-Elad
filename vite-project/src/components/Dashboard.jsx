import students from "../data/students";
import '..//index.css'

function StudentsTable() {
    const Student = ({ student }) => (
        <tr>
            <td>{student.name}</td>
            <td>{student.age}</td>
            <td>{student.major}</td>
            <td>{student.university}</td>
            <td>{student.averageGrade}</td>
        </tr>
    )
    return (
        <div>
            <table className="students-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Major</th>
                        <th>University</th>
                        <th>Average Grade</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student, index) => (
                        <Student key={student.id} student={student} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default StudentsTable;
