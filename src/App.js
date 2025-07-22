import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Incomes from './pages/Incomes';
import Goals from './pages/Goals';
import Simulate from './pages/Simulate';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { ThemeProvider } from './context/ThemeContext';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('userId'));

  const handleLogout = () => {
    localStorage.removeItem('userId');
    setIsLoggedIn(false);
  };

  return (
    <ThemeProvider>
      <Router>
        {isLoggedIn && <Navbar onLogout={handleLogout} />}
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login onLogin={() => setIsLoggedIn(true)} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />} />
          <Route path="/incomes" element={isLoggedIn ? <Incomes /> : <Navigate to="/login" />} />
          <Route path="/goals" element={isLoggedIn ? <Goals /> : <Navigate to="/login" />} />
          <Route path="/simulate" element={isLoggedIn ? <Simulate /> : <Navigate to="/login" />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
