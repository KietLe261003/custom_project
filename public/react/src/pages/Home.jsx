import React, { useState } from 'react'
import reactLogo from '../assets/react.svg'

const Home = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      
      <div style={{ marginTop: '3rem', textAlign: 'left' }}>
        <h2>Welcome to Custom Project</h2>
        <p>
          This is a React frontend integrated with your Frappe Custom Project app.
          You can build modern, interactive user interfaces with React components.
        </p>
        
        <h3>Features:</h3>
        <ul>
          <li>React 18 with modern hooks</li>
          <li>React Router for navigation</li>
          <li>Vite for fast development and building</li>
          <li>Integrated with Frappe backend</li>
          <li>Responsive design</li>
        </ul>
      </div>
    </div>
  )
}

export default Home
