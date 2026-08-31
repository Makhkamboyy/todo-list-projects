import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div className="p-8 text-primary font-bold">TaskFlowssssssss App is running!</div>} />
      </Routes>
    </Router>
  );
}

export default App;
