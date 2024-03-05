import { useState } from 'react';
import studentsData from "../data/students";


function StudentsTable() {
    const [students, setStudents] = useState(studentsData);

    const Student = ({ student, onDelete }) => (
        <tr>
            <td>{student.name}</td>
            <td>{student.age}</td>
            <td>{student.major}</td>
            <td>{student.university}</td>
            <td>{student.averageGrade}</td>
            <td className="action">
                <button onClick={() => onDelete(student.id)}>Delete</button>
            </td>
        </tr>
    )

    const handleDeleteStudent = (studentId) => {
        const updatedStudents = students.filter(student => student.id !== studentId);
        
        setStudents(updatedStudents);

        console.log(`Deleted student with ID: ${studentId}`);
    }

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
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student, index) => (
                        <Student key={student.id} student={student} onDelete={handleDeleteStudent} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default StudentsTable;
