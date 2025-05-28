import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Dashboard from './components/pages/Dashboard';
import Auctions from './components/pages/Auctions';
import Sell from './components/pages/Sell';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import ProtectedRoute from './components/Auth/ProtectedRoute';
import { AuthContextProvider } from './components/Auth/AuthContext';

function App() {
  return (
    <AuthContextProvider>
      <div className="app pt-24">
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            
            {/* Protected Routes */}
            <Route element={<ProtectedRoute />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/auctions" element={<Auctions />} />
              <Route path="/sell" element={<Sell />} />
            </Route>
          </Routes>
        </main>
      </div>
    </AuthContextProvider>
  );
}

export default App;