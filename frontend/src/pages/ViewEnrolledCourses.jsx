import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ViewEnrolledCourses = () => {
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchEnrolledCourses = async () => {
      try {
        const token = localStorage.getItem('token');

        const response = await axios.get('http://localhost:5000/api/courses/my-courses', {
          headers: { Authorization: `Bearer ${token}` }
        });

        setCourses(response.data.courses);
      } catch (error) {
        setError('Failed to load enrolled courses. Please try again.');
      }
    };

    fetchEnrolledCourses();
  }, []);

  return (
    <div className="pc-container">
      <div className="pc-content">
        <div className="page-header">
          <div className="page-block">
            <ul className="breadcrumb">
              <li className="breadcrumb-item"><a href="/">Home</a></li>
              <li className="breadcrumb-item" aria-current="page">My Courses</li>
            </ul>
            <div className="page-header-title">
              <h2 className="mb-0">My Enrolled Courses</h2>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-x-6">
          <div className="col-span-12">
            <div className="card table-card">
              <div className="card-header flex items-center justify-between py-3">
                <h5 className="mb-0">Courses</h5>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>Course Title</th>
                        <th>Assigned Teacher</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Description</th>
                        <th className="text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {courses.map(course => (
                        <tr key={course._id}>
                          <td>{course.title}</td>
                          <td>{course.assignedTeacher.name}</td>
                          <td>{new Date(course.startDate).toLocaleDateString()}</td>
                          <td>{new Date(course.endDate).toLocaleDateString()}</td>
                          <td>{course.description}</td>
                          <td className="text-right">
                            <Link to={`/upload-assignment/${course._id}`} className="btn btn-link-secondary">
                              Upload Assignment
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

export default ViewEnrolledCourses;
