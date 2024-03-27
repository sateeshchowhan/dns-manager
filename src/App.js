import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Dashboard() {
  const [records, setRecords] = useState([]);
  const [formData, setFormData] = useState({
    type: '',
    name: '',
    value: '',
  });

  useEffect(() => {
    fetchRecords();
  }, []);

  const fetchRecords = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/dns');
      setRecords(response.data);
    } catch (error) {
      console.error('Error fetching DNS records:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:5000/api/dns/create', formData);
      fetchRecords();
      setFormData({
        type: '',
        name: '',
        value: '',
      });
    } catch (error) {
      console.error('Error creating DNS record:', error);
    }
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px',
  };

  const thStyle = {
    backgroundColor: '#f2f2f2',
    padding: '12px 15px',
    textAlign: 'left',
    borderBottom: '1px solid #ddd',
  };

  const tdStyle = {
    padding: '12px 15px',
    textAlign: 'left',
    borderBottom: '1px solid #ddd',
  };

  const formContainerStyle = {
    marginBottom: '20px',
  };

  const formRowStyle = {
    marginBottom: '15px',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '5px',
  };

  return (
    <div>
      <h1>DNS Records</h1>

      <div style={formContainerStyle}>
        <h2>Add Record</h2>
        <form onSubmit={handleSubmit}>
          <div style={formRowStyle}>
            <label style={labelStyle}>
              Type:
              <input
                type="text"
                name="type"
                value={formData.type}
                onChange={handleInputChange}
                style={{ marginLeft: '10px' }}
              />
            </label>
          </div>
          <div style={formRowStyle}>
            <label style={labelStyle}>
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                style={{ marginLeft: '10px' }}
              />
            </label>
          </div>
          <div style={formRowStyle}>
            <label style={labelStyle}>
              Value:
              <input
                type="text"
                name="value"
                value={formData.value}
                onChange={handleInputChange}
                style={{ marginLeft: '10px' }}
              />
            </label>
          </div>
          <button type="submit" style={{ padding: '10px 15px', backgroundColor: '#007BFF', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Add Record</button>
        </form>
      </div>

      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Type</th>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Value</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record) => (
            <tr key={record._id}>
              <td style={tdStyle}>{record.type}</td>
              <td style={tdStyle}>{record.name}</td>
              <td style={tdStyle}>{record.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
