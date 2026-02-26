
import React, { useState } from 'react';

const App = () => {
  // Inline Style Objects
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f4f9',
    color: '#333'
  };

  const cardStyle = {
    padding: '20px',
    borderRadius: '12px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
    textAlign: 'center',
    width: '300px'
  };

  const buttonStyle = {
    marginTop: '15px',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    backgroundColor: '#61dafb',
    border: 'none',
    borderRadius: '5px',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease'
  };

  const [count, setCount] = useState(0);

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h2>React Inline CSS</h2>
        <p>Current Count: <strong>{count}</strong></p>
        <button 
          style={buttonStyle} 
          onClick={() => setCount(count + 1)}
          onMouseOver={(e) => e.target.style.backgroundColor = '#4fa8c7'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#61dafb'}
        >
          Increment
        </button>
      </div>
    </div>
  );
};

export default App;