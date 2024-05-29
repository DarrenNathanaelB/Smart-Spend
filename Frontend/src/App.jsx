import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import Login from './pages/login';
import Navbar from './components/navbar';
import Register from './pages/register';
import AddExpense from './pages/addExpense';
import UpdateExpense from './pages/updateExpense';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/addExpense" element={<AddExpense />} />
        <Route path="/updateExpense/:expense_id" element={<UpdateExpense />} />
      </Routes>
    </Router>
  );
}

export default App;
