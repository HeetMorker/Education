import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const UploadAssignment = () => {
  const { courseId } = useParams();
  const [file, setFile] = useState(null);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('assignment', file);

    try {
      const token = localStorage.getItem('token');

      await axios.post(`http://localhost:5000/api/courses/${courseId}/upload-assignment`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        }
      });

      setSuccess('Assignment uploaded successfully');
    } catch (error) {
      setError('Failed to upload assignment. Please try again.');
    }
  };

  return (
    <div className="pc-container">
      <div className="pc-content">
        <h2>Upload Assignment</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Select Assignment</label>
            <input type="file" className="form-control" onChange={handleFileChange} />
          </div>
          <button type="submit" className="btn btn-primary">Submit Assignment</button>
        </form>
        {success && <div className="alert alert-success">{success}</div>}
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

export default UploadAssignment;
