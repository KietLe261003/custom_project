import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Dashboard = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    // Simulate API call to Frappe backend
    const fetchData = async () => {
      try {
        // Replace with actual Frappe API endpoint
        // const response = await axios.get('/api/method/custom_project.api.get_dashboard_data')
        
        // Mock data for now
        setTimeout(() => {
          setData({
            users: 150,
            projects: 25,
            tasks: 89,
            completedTasks: 67
          })
          setLoading(false)
        }, 1000)
      } catch (err) {
        setError('Failed to fetch data')
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) return <div className="container">Loading...</div>
  if (error) return <div className="container">Error: {error}</div>

  return (
    <div className="container">
      <h1>Dashboard</h1>
      <p>Welcome to your Custom Project Dashboard</p>
      
      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h3>Total Users</h3>
          <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#007bff' }}>
            {data?.users || 0}
          </p>
        </div>
        
        <div className="dashboard-card">
          <h3>Active Projects</h3>
          <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#28a745' }}>
            {data?.projects || 0}
          </p>
        </div>
        
        <div className="dashboard-card">
          <h3>Total Tasks</h3>
          <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#ffc107' }}>
            {data?.tasks || 0}
          </p>
        </div>
        
        <div className="dashboard-card">
          <h3>Completed Tasks</h3>
          <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#dc3545' }}>
            {data?.completedTasks || 0}
          </p>
        </div>
      </div>

      <div style={{ marginTop: '2rem', textAlign: 'left' }}>
        <h2>Quick Actions</h2>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <button onClick={() => alert('Create New Project')}>
            Create New Project
          </button>
          <button onClick={() => alert('Add User')}>
            Add User
          </button>
          <button onClick={() => alert('View Reports')}>
            View Reports
          </button>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
