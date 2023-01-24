import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={ <Navigate to="/login" /> } />
      <Route exact path="/login" element={ <Login /> } />
    </Routes>
  );
}

export default App;
