import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import Game from './pages/Game';
import History from './pages/History';
import ProtectedRoute from './components/ProtectedRoute';
import Leaderboard from './pages/Leaderboard';





function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
  <Route path="/login" element={<Login />} />
  <Route path="/register" element={<Register />} />
  <Route
    path="/game"
    element={
      <ProtectedRoute>
        <Game />
      </ProtectedRoute>
    }
  />
  <Route
    path="/history"
    element={
      <ProtectedRoute>
        <History />
      </ProtectedRoute>
    }
  />
  <Route path="/leaderboard" element={<Leaderboard />} />
  <Route path="*" element={<Login />} />
</Routes>

    </Router>
  );
}

export default App;
