import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={ <Navigate to="/login" /> } />
        {/* // https://reactrouter.com/en/main/components/navigate */}
        <Route exact path="/login" component={ Login } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
