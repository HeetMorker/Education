import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const UploadAssignment = () => {
  const { courseId } = useParams(); // Get the courseId from the URL
  const [file, setFile] = useState(null);
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Create a FormData object to send the file
    const formData = new FormData();
    formData.append('assignment', file);
    formData.append('description', description);
    formData.append('courseId', courseId);

    try {
      const token = localStorage.getItem('token');

      const response = await axios.post(`http://localhost:5000/api/assignments/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data) {
        setSuccess('Assignment uploaded successfully!');
        setFile(null);
        setDescription('');
      }
    } catch (error) {
      setError('Failed to upload assignment. Please try again.');
    }
  };

  return (
    <div className="pc-container">
      <div className="pc-content">
        <div className="page-header">
          <h2>Upload Assignment</h2>
        </div>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="mb-3">
            <label className="form-label">Assignment File:</label>
            <input type="file" className="form-control" onChange={handleFileChange} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Description:</label>
            <textarea
              className="form-control"
              placeholder="Enter description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Upload</button>
        </form>

        {error && <div className="alert alert-danger mt-3">{error}</div>}
        {success && <div className="alert alert-success mt-3">{success}</div>}
      </div>
    </div>
  );
};

export default UploadAssignment;
