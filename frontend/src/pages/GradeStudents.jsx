import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const GradeStudents = () => {
  const { courseId } = useParams(); // Get courseId from the URL
  const [students, setStudents] = useState([]);
  const [grades, setGrades] = useState({});
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    const fetchStudentsAndGrades = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`http://localhost:5000/api/grades/${courseId}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setStudents(response.data);
      } catch (error) {
        setError('Failed to load students and grades.');
      }
    };

    fetchStudentsAndGrades();
  }, [courseId]);

  const handleGradeSubmit = async (studentId, grade) => {
    setError('');
    setSuccess('');
    const token = localStorage.getItem('token');

    try {
      await axios.post('http://localhost:5000/api/grades/submit', {
        courseId,
        studentId,
        grade,
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setSuccess('Grade submitted successfully');
    } catch (error) {
      setError('Failed to submit grade');
    }
  };

  return (
    <div className="pc-container">
      <div className="pc-content">
        <div className="page-header">
          <div className="page-block">
            <ul className="breadcrumb">
              <li className="breadcrumb-item"><a href="/">Home</a></li>
              <li className="breadcrumb-item">Grade Students</li>
            </ul>
            <div className="page-header-title">
              <h2 className="mb-0">Grade Students</h2>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12">
            {error && <div className="alert alert-danger">{error}</div>}
            {success && <div className="alert alert-success">{success}</div>}
            <div className="card">
              <div className="card-header">
                <h5>Students in Course</h5>
              </div>
              <div className="card-body">
                {students.length === 0 ? (
                  <p>No students found.</p>
                ) : (
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>Student Name</th>
                        <th>Email</th>
                        <th>Grade</th>
                        <th>Submit Grade</th>
                      </tr>
                    </thead>
                    <tbody>
                      {students.map(student => (
                        <tr key={student._id}>
                          <td>{student.student.name}</td>
                          <td>{student.student.email}</td>
                          <td>
                            <input
                              type="number"
                              value={grades[student._id] || ''}
                              onChange={(e) => setGrades({ ...grades, [student._id]: e.target.value })}
                            />
                          </td>
                          <td>
                            <button
                              className="btn btn-primary"
                              onClick={() => handleGradeSubmit(student.student._id, grades[student._id])}
                            >
                              Submit Grade
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GradeStudents;
