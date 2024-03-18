import { useState } from 'react';

const AddStudent = ({ onAddStudent }) => {
    const [newStudent, setNewStudent] = useState({
        name: '',
        age: '',
        major: '',
        university: '',
        averageGrade: '',
    });

    const handleAddStudent = (e) => {
        e.preventDefault();
        const { name, age, major, university, averageGrade } = newStudent;

        if (!name || !age || !major || !university || !averageGrade) {

            return;
        }
        console.log('New Student Data:', newStudent)

        onAddStudent(newStudent);
        setNewStudent({
            name: '',
            age: '',
            major: '',
            university: '',
            averageGrade: '',
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewStudent((prevStudent) => ({ ...prevStudent, [name]: value }));
    };

    return (
        <div className='formContainer'>
            <br></br>
            <h2 className='h2Add'>Add Student</h2>
            <form className='AddStudentForm' onSubmit={handleAddStudent}>
                <label> Name:</label>
                <input type="text" name="name" value={newStudent.name} onChange={handleChange} required />

                <label> Age:</label>
                <input type="number" name="age" value={newStudent.age} onChange={handleChange} required />

                <label> Major:</label>
                <input type="text" name="major" value={newStudent.major} onChange={handleChange} required />

                <label> University:</label>
                <input type="text" name="university" value={newStudent.university} onChange={handleChange} required />

                <label> Grade:</label>
                <input type="number" name="averageGrade" value={newStudent.averageGrade} onChange={handleChange} required />
                <br></br>

                <button className='Addbtn' type="submit"> Add Student </button>
            </form>
            <br />
        </div>
    )
};

export default AddStudent;
