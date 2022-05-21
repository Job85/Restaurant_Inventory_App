import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
