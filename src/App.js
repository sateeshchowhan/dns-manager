import React, { useState, useEffect } from 'react';

function Dashboard() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    // Fetch records from backend
    // (Note: This is a placeholder; actual fetching needs integration with backend API)
    const fetchedRecords = [
      { _id: 1, type: 'A', name: 'example.com', value: '192.168.1.1' },
      { _id: 2, type: 'AAAA', name: 'example.com', value: '2001:0db8:85a3:0000:0000:8a2e:0370:7334' },
      { _id: 3, type: 'CNAME', name: 'www.example.com', value: 'example.com' },
      { _id: 4, type: 'MX', name: 'example.com', value: 'mail.example.com' },
      { _id: 5, type: 'NS', name: 'example.com', value: 'ns1.example.com' },
      { _id: 6, type: 'PTR', name: '1.1.168.192.in-addr.arpa', value: 'example.com' },
      { _id: 7, type: 'SOA', name: 'example.com', value: 'ns1.example.com' },
      { _id: 8, type: 'SRV', name: '_sip._tcp.example.com', value: '10 50 5060 sipserver.example.com' },
      { _id: 9, type: 'TXT', name: 'example.com', value: 'v=spf1 mx -all' },
      { _id: 10, type: 'DNSSEC', name: 'example.com', value: 'DS record details' },
    ];

    setRecords(fetchedRecords);
  }, []);

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

  return (
    <div>
      <h1>DNS Records</h1>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Type</th>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Value</th>
          </tr>
        </thead>
        <tbody>
          {records.map(record => (
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
