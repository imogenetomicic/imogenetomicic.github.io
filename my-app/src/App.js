import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import HomePage from './pages/HomePage'; // Assume you have a HomePage component
import AboutMePage from './pages/AboutMePage';
import WorkPage from './pages/WorkPage';
import IdeasPage from './pages/IdeasPage';
import ContactPage from './pages/ContactPage';
//import AnotherPage from './components/AnotherPage'; // Another component for a different route
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Menu />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/me" element={<AboutMePage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/ideas" element={<IdeasPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
