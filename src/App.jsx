import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ErrorBoundary from './components/ErrorBoundary';



function App() {
  return (
    <Router>
    <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Home />} />
          
        </Routes>
        </ErrorBoundary>
    </Router>
  );
}

export default App;
