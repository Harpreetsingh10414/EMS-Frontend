import React from 'react';
import './styles/app.css';
import reactLogo from './assets/react-logo.png';
import viteLogo from './assets/vite-logo.png';

const App = () => {
  return (
    <div className="app-container">
      <h1>EMS Frontend using React & Vite</h1>
      <div className="logos">
        <img src={viteLogo} alt="Vite Logo" />
        <img src={reactLogo} alt="React Logo" />
      </div>
    </div>
  );
};

export default App;
