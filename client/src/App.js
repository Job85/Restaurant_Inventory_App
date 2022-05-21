import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <body>
        <Routes>
          <Home path='/' element={<Home />} />
        </Routes>
      </body>
      <footer>

      </footer>
    </div>
  );
}

export default App;
